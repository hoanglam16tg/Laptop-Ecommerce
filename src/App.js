import 'antd/dist/antd.css';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import './styles/App.scss';

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
