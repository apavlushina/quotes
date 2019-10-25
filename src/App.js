import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import OneAuthor from "./components/OneAuthor";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={MainPage} />
      <Route exact path="/oneauthor/:quoteId" component={OneAuthor} />
    </div>
  );
}

export default App;
