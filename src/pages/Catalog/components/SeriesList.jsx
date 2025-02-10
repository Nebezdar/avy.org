import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const SeriesCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const SeriesImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  background: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const SeriesName = styled.div`
  text-align: center;
  font-weight: 500;
  color: #333;
`;

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const SeriesList = ({ productType, itemType, onSelect }) => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_URL}/api/models/series/${productType}/${itemType}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch series');
        }

        const data = await response.json();
        setSeries(data);
      } catch (err) {
        console.error('Error fetching series:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (productType && itemType) {
      fetchSeries();
    }
  }, [productType, itemType]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!series.length) {
    return <div>No series found for {itemType}</div>;
  }

  return (
    <Grid>
      {series.map(item => (
        <SeriesCard key={item._id} onClick={() => onSelect(item)}>
          <SeriesImage 
            src={item.image || '/placeholder.jpg'} 
            alt={item.name}
            onError={(e) => {
              e.target.src = '/B1SV-.jpg';
            }}
          />
          <SeriesName>{item.name}</SeriesName>
        </SeriesCard>
      ))}
    </Grid>
  );
};

export default SeriesList; 