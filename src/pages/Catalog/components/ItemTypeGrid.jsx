import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setLoading, setError, setItemTypes } from '../../../store/catalogSlice';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const GridItem = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s;
  height: 250px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  background: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const ItemName = styled.div`
  text-align: center;
  font-weight: 500;
  color: #333;
  margin-top: auto;
`;

const ItemCount = styled.div`
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const ItemTypeGrid = ({ productType, onSelect }) => {
  const dispatch = useDispatch();
  const { itemTypes, loading, error } = useSelector(state => state.catalog);

  React.useEffect(() => {
    const fetchItemTypes = async () => {
      try {
        dispatch(setLoading(true));
        console.log('Fetching from:', `${API_URL}/api/models/types/${productType}`);

        const response = await fetch(`${API_URL}/api/models/types/${productType}`);
        console.log('Response:', response);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received data:', data);
        dispatch(setItemTypes(data));
      } catch (err) {
        console.error('Error fetching item types:', err);
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (productType) {
      fetchItemTypes();
    }
  }, [productType, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Grid>
      {itemTypes.map(type => (
        <GridItem key={type._id} onClick={() => onSelect(type.name)}>
          <ImageContainer>
            <ItemImage
              src={type.image || '/Instrument Thread & Weld Fitting.jpg.jpg'}
              alt={type.name}
              onError={(e) => {
                e.target.src = '/Instrument Thread & Weld Fitting.jpg';
              }}
              onLoad={(e) => {
                e.target.style.opacity = 1;
              }}
              loaded={false}
            />
          </ImageContainer>
          <ItemName>{type.name}</ItemName>
          <ItemCount>({type.count} items)</ItemCount>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ItemTypeGrid;
