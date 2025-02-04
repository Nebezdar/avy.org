import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ModelModal from '../../components/ModelModal';

const ModelCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const Catalog = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <CatalogContainer>
      <Grid>
        {filteredModels.map(model => (
          <ModelCard 
            key={model.id}
            onClick={() => setSelectedModel(model)}
          >
            <ModelImage src={model.thumbnail} alt={model.name} />
            <ModelInfo>
              <h3>{model.name}</h3>
              <p>{model.description}</p>
            </ModelInfo>
          </ModelCard>
        ))}
      </Grid>

      {selectedModel && (
        <ModelModal 
          model={selectedModel} 
          onClose={() => setSelectedModel(null)}
        />
      )}
    </CatalogContainer>
  );
};

export default Catalog; 