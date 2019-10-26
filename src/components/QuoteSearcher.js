import React from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends React.Component {
  state = {
    quotes: [],
    fetching: true,
    search: ""
  };

  makeUnique = quotesArray => {
    return quotesArray.reduce((unique, next) => {
      if (!unique.some(obj => obj.quoteText === next.quoteText)) {
        unique.push(next);
      }
      return unique;
    }, []);
  };

  componentDidMount(keyword = "tree") {
    fetch(`https://quote-garden.herokuapp.com/quotes/search/${keyword}`)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        this.setState({
          quotes: this.makeUnique(response.results),
          fetching: false
        });
      })
      .catch(console.error);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.componentDidMount(this.state.search);
    this.setState({ [event.target.name]: "" });
  };

  render() {
    return (
      <div>
        <p>Do you want smthing special?</p>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="type your request here"
            onChange={this.handleChange}
            value={this.state.search}
          />
          <input
            type="submit"
            value="Search the quote for me!"
            onClick={this.handleSearch}
          />
        </form>

        <ul>
          {this.state.fetching && "Loading..."}
          {!this.state.fetching &&
            this.state.quotes.map(quote => {
              return <Quote key={quote._id} {...quote} />;
            })}
        </ul>
      </div>
    );
  }
}
