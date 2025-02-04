import { useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { 
  Nav, 
  NavLink, 
  AuthButtons,
  UserMenu 
} from './styles';

const Navigation = () => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <Nav>
      <Link to="/" className="logo">
        AVY.ORG
      </Link>

      <div className="nav-links">
        <NavLink 
          to="/catalog"
          $active={location.pathname.startsWith('/catalog')}
        >
          Catalog
        </NavLink>
      </div>

      {isAuthenticated ? (
        <UserMenu>
          <button 
            className="user-button"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            {user.email}
          </button>
          
          {showUserMenu && (
            <div className="menu-dropdown">
              <Link to="/profile">Profile</Link>
              <button onClick={logout}>Logout</button>
            </div>
          )}
        </UserMenu>
      ) : (
        <AuthButtons>
          <Link to="/login" className="login-btn">
            Sign In
          </Link>
          <Link to="/register" className="register-btn">
            Create Account
          </Link>
        </AuthButtons>
      )}
    </Nav>
  );
}; 