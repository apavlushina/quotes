import React from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends React.Component {
  state = {
    quotes: [],
    fetching: true
  };

  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(res => res.json())
      .then(response => {
        console.log("response", response);
        this.setState({
          quotes: response.results,
          fetching: false
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.fetching && "Loading..."}
          {!this.state.fetching &&
            this.state.quotes.map(quote => {
              return (
                <li key={quote._id}>
                  <Quote {...quote} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
