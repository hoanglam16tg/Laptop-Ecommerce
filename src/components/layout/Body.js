import Slide from '../common/BodyDetails/Carousel';
import ListCard from '../common/BodyDetails/ListCard';
import { Route, Switch } from 'react-router-dom';
import Login from '../../screens/Login';
import CartPage from '../../screens/CartPage';
import ProductDetails from '../common/ProductDetails/index';

const Body = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/product-details">
          <ProductDetails />
        </Route>
        <Route exact path="/">
          {' '}
          <Slide />
          <ListCard />
        </Route>
      </Switch>
    </>
  );
};
export default Body;
