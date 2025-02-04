import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const ModelViewer = styled.div`
  width: 100%;
  height: 600px;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;

  model-viewer {
    width: 100%;
    height: 100%;
  }
`;

export const DownloadSection = styled.div`
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 2rem;
    color: #333;
  }
`;

export const FormatSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 1rem;
    color: #666;
  }

  .format-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 0.5rem;

    button {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      transition: all 0.2s;

      &.active {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }

      &:hover:not(.active) {
        background: #f5f5f5;
      }
    }
  }
`;

export const DownloadButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--primary-color);
  color: white;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.2s;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--primary-color-dark);
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;

  button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    
    &:first-child {
      background: var(--primary-color);
      color: white;
    }
  }
`; 