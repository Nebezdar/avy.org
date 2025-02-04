import { useSelector } from 'react-redux';
import styled from 'styled-components';

const List = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ListItem = styled.div`
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
  background: ${props => props.selected ? '#f8f9fa' : 'white'};
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  color: #333;

  &:hover {
    background: #f8f9fa;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

const ProductTypeList = ({ selected, onSelect }) => {
  const productTypes = ['Fittings', 'Valves'];

  return (
    <List>
      {productTypes.map(type => (
        <ListItem
          key={type}
          selected={selected === type}
          onClick={() => onSelect(type)}
        >
          {type}
        </ListItem>
      ))}
    </List>
  );
};

export default ProductTypeList; 