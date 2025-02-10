import styled from 'styled-components';

export const CatalogWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Sidebar = styled.div`
  width: 250px;
  padding-right: 20px;
`;

export const Content = styled.div`
  flex: 1;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  padding: 20px;
  flex: 1;
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  background: #f5f5f5;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProductInfo = styled.div`
  padding: 16px;
  text-align: center;
  background: white;
`;

export const ProductName = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;

export const TreeItem = styled.div`
  padding: 10px;
  cursor: pointer;
  background: ${props => props.isActive ? '#f0f0f0' : 'transparent'};
  
  &:hover {
    background: #f5f5f5;
  }
`; 