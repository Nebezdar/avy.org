import styled from 'styled-components';

export const AuthContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text-color);
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.error ? 'var(--error-color)' : '#ddd'};
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.error ? 'var(--error-color)' : 'var(--primary-color)'};
    box-shadow: 0 0 0 2px ${props => 
      props.error ? 
      'rgba(220, 53, 69, 0.25)' : 
      'rgba(0, 123, 255, 0.25)'
    };
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:disabled {
    background: var(--secondary-color);
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--primary-color-dark);
  }
`;

export const ErrorMessage = styled.div`
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: -0.5rem;
`; 