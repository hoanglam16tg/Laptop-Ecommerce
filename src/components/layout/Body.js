import { Route, Switch } from "react-router-dom";
import Login from "./Auth/Login";
import CartPage from "./CartPage";
import BodyDetails from "../common/BodyDetails/index";
import ProductDetails from "../common/ProductDetails/index";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Catalog from "../common/Catalog/index";
import Landing from "../layout/Auth/Landing";
import Admin from "../common/Admin/admin";
import { Routing } from "../../constants/Routing_common";
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
