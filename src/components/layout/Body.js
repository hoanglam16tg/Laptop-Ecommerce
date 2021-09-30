import { Route, Switch } from 'react-router-dom';
import { Routing } from "../../constants/Routing_common";
import Admin from '../common/Admin/admin';
import BodyDetails from '../common/BodyDetails/index';
import Catalog from '../common/Catalog/index';
import ProductDetails from '../common/ProductDetails/index';
import Landing from '../layout/Auth/Landing';
import AboutUs from './AboutUs';
import Login from './Auth/Login';
import CartPage from './CartPage';
import Contact from './Contact';

const Body = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path={`${Routing.PRODUCTDETAIL}:id`}>
          <ProductDetails />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route exact path="/home">
          <BodyDetails />
        </Route>
      </Switch>
    </>
  );
};
export default Body;
