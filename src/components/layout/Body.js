import Slide from "../common/BodyDetails/Carousel";
import ListCard from "../common/BodyDetails/ListCard";
import { Link, Route, Switch } from "react-router-dom";
import Login from "../../screens/Login";
import CartPage from "../../screens/CartPage";
import BodyDetails from "../common/BodyDetails";
const Body = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          {" "}
          <BodyDetails />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </>
  );
};
export default Body;
