import { useState } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 1200px;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 300px;
  overflow: hidden;
`;

const ModelViewer = styled.div`
  background: #f8f9fa;
  position: relative;
`;

const ModelInfo = styled.div`
  padding: 2rem;
  border-left: 1px solid #eee;
  overflow-y: auto;
`;

const FormatSection = styled.div`
  margin-bottom: 2rem;
`;

const FormatTitle = styled.h3`
  margin-bottom: 1rem;
  color: #333;
`;

const FormatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

const FormatButton = styled.button`
  padding: 0.5rem;
  border: 1px solid #ddd;
  background: ${props => props.selected ? '#007bff' : 'white'};
  color: ${props => props.selected ? 'white' : '#333'};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${props => props.selected ? '#007bff' : '#f8f9fa'};
  }
`;

const DownloadButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background: #0056b3;
  }
`;

const ModelCard = ({ model, onClose }) => {
  const [selected3DFormat, setSelected3DFormat] = useState(null);
  const [selectedCADFormat, setSelectedCADFormat] = useState(null);

  const formats3D = ['DWG', 'IGS', 'IPT', 'M3D', 'SAT', 'STL', 'STP', 'X_T'];
  const formatsCAD = ['CDW', 'DXF', 'PDF', 'Drawing.DWG'];

  const handleDownload = () => {
    const format = selected3DFormat || selectedCADFormat;
    if (!format) return;

    const url = `http://j743689.myjino.ru/fld/models/out/${model?.articleNumber}.FLD.RU.${format.toLowerCase()}`;
    window.open(url, '_blank');
  };

  if (!model) return null;

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModelViewer>
          {/* Здесь будет 3D просмотр */}
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            3D Model Viewer Placeholder
          </div>
        </ModelViewer>

        <ModelInfo>
          <FormatSection>
            <FormatTitle>Choose file type</FormatTitle>
            <h4>3D model</h4>
            <FormatGrid>
              {formats3D.map(format => (
                <FormatButton
                  key={format}
                  selected={selected3DFormat === format}
                  onClick={() => {
                    setSelected3DFormat(format);
                    setSelectedCADFormat(null);
                  }}
                >
                  {format}
                </FormatButton>
              ))}
            </FormatGrid>
          </FormatSection>

          <FormatSection>
            <h4>CAD</h4>
            <FormatGrid>
              {formatsCAD.map(format => (
                <FormatButton
                  key={format}
                  selected={selectedCADFormat === format}
                  onClick={() => {
                    setSelectedCADFormat(format);
                    setSelected3DFormat(null);
                  }}
                >
                  {format}
                </FormatButton>
              ))}
            </FormatGrid>
          </FormatSection>

          <DownloadButton 
            onClick={handleDownload}
            disabled={!selected3DFormat && !selectedCADFormat}
          >
            Download
          </DownloadButton>
        </ModelInfo>
      </ModalContent>
    </Modal>
  );
};

export default ModelCard; 