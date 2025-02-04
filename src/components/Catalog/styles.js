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

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;

export const ItemCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  .image-container {
    aspect-ratio: 1;
    background: #f5f5f5;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
`;

export const TreeItem = styled.div`
  padding: 10px;
  cursor: pointer;
  background: ${props => props.isActive ? '#f0f0f0' : 'transparent'};
  
  &:hover {
    background: #f5f5f5;
  }
`; 