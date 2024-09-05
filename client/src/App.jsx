import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/products/:id" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
