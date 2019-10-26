import React from "react";
import { Link } from "react-router-dom";

export default class OneAuthor extends React.Component {
  state = {
    quotes: null
  };

  componentDidMount() {
    const quote = this.props.match.params.quoteId;
    fetch(
      `https://quote-garden.herokuapp.com/quotes/author/${encodeURIComponent(
        quote
      )}`
    )
      .then(res => res.json())
      .then(data =>
        this.updateQuotes(data.results.map(quote => quote.quoteText))
      )
      .catch(console.error);
  }

  updateQuotes(quotes) {
    this.setState({
      quotes: Array.from(new Set(quotes))
    });
  }

  render() {
    return (
      <div>
        <main>
          <h3>Quotes by {this.props.match.params.quoteId}</h3>
          {(!this.state.quotes && "Loading...", console.log("loading"))}
          {this.state.quotes &&
            this.state.quotes.map(quote => {
              return <p>{quote}</p>;
            })}
          <Link to="/">Go back to the index</Link>
        </main>
      </div>
    );
  }
}
