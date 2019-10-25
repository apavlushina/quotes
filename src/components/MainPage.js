import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import QuoteSearcher from "./QuoteSearcher";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main>
          <h1>Quote App</h1>
          <QuoteSearcher></QuoteSearcher>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
