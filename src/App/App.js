import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainRouter from './Router/MainRouter';

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default hot(module)(App);
