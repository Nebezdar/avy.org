import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin: 0;
  color: #333;
`;

const ArticleNumber = styled.div`
  color: #666;
  font-size: 1.1rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const DetailItem = styled.div`
  h3 {
    margin: 0 0 0.5rem 0;
    color: #666;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  p {
    margin: 0;
    color: #333;
    font-size: 1.1rem;
  }
`;

const ProductCard = () => {
  const selectedModel = useSelector(state => state.catalog.selectedModel);

  if (!selectedModel) {
    return <div>No product selected</div>;
  }

  return (
    <Container>
      <Card>
        <Header>
          <div>
            <Title>{selectedModel.name || selectedModel.itemType}</Title>
            <ArticleNumber>{selectedModel.articleNumber}</ArticleNumber>
          </div>
        </Header>

        <ImageContainer>
          <Image 
            src={selectedModel.image || '/placeholder.jpg'} 
            alt={selectedModel.name}
            onError={(e) => {
              e.target.src = '/placeholder.jpg';
            }}
          />
        </ImageContainer>

        <Details>
          <DetailItem>
            <h3>Product Type</h3>
            <p>{selectedModel.productType}</p>
          </DetailItem>
          <DetailItem>
            <h3>Item Type</h3>
            <p>{selectedModel.itemType}</p>
          </DetailItem>
          <DetailItem>
            <h3>Series</h3>
            <p>{selectedModel.series}</p>
          </DetailItem>
          <DetailItem>
            <h3>Article Number</h3>
            <p>{selectedModel.articleNumber}</p>
          </DetailItem>
        </Details>
      </Card>
    </Container>
  );
};

export default ProductCard; 