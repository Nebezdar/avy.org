import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AuthForm, FormInput, SubmitButton, ErrorMessage } from './styles';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(credentials);
      navigate(-1); // Возврат на предыдущую страницу
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <FormInput
        type="email"
        placeholder="Email"
        value={credentials.email}
        onChange={(e) => setCredentials(prev => ({
          ...prev,
          email: e.target.value
        }))}
        required
      />
      
      <FormInput
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials(prev => ({
          ...prev,
          password: e.target.value
        }))}
        required
      />
      
      <SubmitButton type="submit">Sign In</SubmitButton>
    </AuthForm>
  );
};

export default Login; 