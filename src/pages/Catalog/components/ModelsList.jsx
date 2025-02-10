import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const ModelCard = styled.div`
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

const ModelImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  background: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ModelInfo = styled.div`
  text-align: center;
`;

const ModelName = styled.div`
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ArticleNumber = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: ${props => props.active ? '#007bff' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${props => props.active ? '#007bff' : '#f8f9fa'};
  }
`;

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const ModelsList = ({ productType, itemType, series, onSelect }) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_URL}/api/models/${productType}/${itemType}/${series}?page=${currentPage}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch models');
        }

        const data = await response.json();
        setModels(data.models);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error('Error fetching models:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (productType && itemType && series) {
      fetchModels();
    }
  }, [productType, itemType, series, currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!models.length) {
    return <div>No models found</div>;
  }

  return (
    <>
      <Grid>
        {models.map(model => (
          <ModelCard key={model._id} onClick={() => onSelect(model)}>
            <ModelImage 
              src={model.thumbnail || '/placeholder.jpg'} 
              alt={model.articleNumber}
              onError={(e) => {
                e.target.src = '/B1SV-.jpg';
              }}
            />
            <ModelInfo>
              <ModelName>{model.name}</ModelName>
              <ArticleNumber>{model.articleNumber}</ArticleNumber>
            </ModelInfo>
          </ModelCard>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => (
            <PageButton
              key={i + 1}
              active={currentPage === i + 1}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </PageButton>
          ))}
        </Pagination>
      )}
    </>
  );
};

export default ModelsList; 