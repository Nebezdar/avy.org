import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TreeWrapper, TreeItem } from './styles';

const CategoryTree = ({ currentLevel, productType }) => {
  const [expanded, setExpanded] = useState(productType || 'fittings');
  const navigate = useNavigate();

  const productTypes = [
    { id: 'fittings', name: 'Fittings' },
    { id: 'valves', name: 'Valves' }
  ];

  const handleTypeClick = (type) => {
    setExpanded(type);
    navigate(`/catalog/${type}`);
  };

  return (
    <TreeWrapper>
      {productTypes.map((type) => (
        <TreeItem 
          key={type.id}
          isActive={expanded === type.id}
          onClick={() => handleTypeClick(type.id)}
        >
          <span>{type.name}</span>
          {expanded === type.id && currentLevel === 'productType' && (
            <SubCategories productType={type.id} />
          )}
        </TreeItem>
      ))}
    </TreeWrapper>
  );
}; 