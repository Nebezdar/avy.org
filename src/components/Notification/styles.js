import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const NotificationContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NotificationItem = styled.div`
  padding: 1rem;
  border-radius: 4px;
  background: ${props => {
    switch (props.type) {
      case 'success':
        return '#d4edda';
      case 'error':
        return '#f8d7da';
      case 'warning':
        return '#fff3cd';
      default:
        return '#d1ecf1';
    }
  }};
  color: ${props => {
    switch (props.type) {
      case 'success':
        return '#155724';
      case 'error':
        return '#721c24';
      case 'warning':
        return '#856404';
      default:
        return '#0c5460';
    }
  }};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  animation: ${slideIn} 0.3s ease;
  min-width: 300px;
  max-width: 400px;
`; 