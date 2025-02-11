import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  
  &:hover {
    color: #000;
  }
`;

const ModelDetails = styled.div`
  padding: 2rem;
`;

const ModelPreview = styled.div`
  width: 100%;
  height: 400px;
  background: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const ModelInfo = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const DownloadSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
`;

const FormatButton = styled.button`
  padding: 0.8rem 1.5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background: ${props => props.primary ? '#007bff' : 'white'};
  color: ${props => props.primary ? 'white' : '#007bff'};
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.primary ? '#0056b3' : '#f8f9fa'};
  }
`;

const ModelModal = ({ model, onClose }) => {
  if (!model) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <ModelDetails>
          <ModelPreview>
            <img src={model.thumbnail} alt={model.name} />
          </ModelPreview>

          <ModelInfo>
            <h2>{model.name}</h2>
            <p>{model.description}</p>

            <div>
              <strong>Category:</strong> {model.category}
            </div>
            <div>
              <strong>Type:</strong> {model.type}
            </div>
            <div>
              <strong>Series:</strong> {model.series}
            </div>

            <DownloadSection>
              <h3>Download Formats</h3>
              <div style={{ marginTop: '1rem' }}>
                <FormatButton primary>STP</FormatButton>
                <FormatButton>IGS</FormatButton>
                <FormatButton>CDW</FormatButton>
                <FormatButton>DWG</FormatButton>
                <FormatButton>DXF</FormatButton>
                <FormatButton>IPT</FormatButton>
                <FormatButton>M3D</FormatButton>
                <FormatButton>PDF</FormatButton>
                <FormatButton>SAT</FormatButton>
                <FormatButton>STL</FormatButton>
                <FormatButton>X_T</FormatButton>
                <FormatButton>DRAW.DWG</FormatButton>

              </div>
            </DownloadSection>
          </ModelInfo>
        </ModelDetails>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModelModal;
