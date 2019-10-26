import React from "react";
import QuoteSearcher from "./QuoteSearcher";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <main>
          <h1>Quote App</h1>
          <QuoteSearcher></QuoteSearcher>
        </main>
      </div>
    );
  }
}
