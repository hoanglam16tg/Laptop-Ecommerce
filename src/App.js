import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import "./styles/App.scss";
import Home from "./screens/Home";
function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
