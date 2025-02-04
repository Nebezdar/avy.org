import styled from 'styled-components';

export const AuthForm = styled.form`
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

export const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
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

  &:hover {
    background: var(--primary-color-dark);
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  text-align: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #fff3f3;
  border-radius: 4px;
`; 