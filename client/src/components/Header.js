import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>E-commerce App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;

