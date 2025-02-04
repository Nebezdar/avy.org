import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { GlobalStyle } from './styles';

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}; 