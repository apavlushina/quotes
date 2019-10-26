import React from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends React.Component {
  state = {
    quotes: [],
    fetching: true,
    search: "",
    countLikes: 0,
    countDislikes: 0
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
        if (response.count === 0) {
          alert("There are no quotes with this keyword, sorry");
        }
        this.setState({
          quotes: this.makeUnique(response.results),
          fetching: false
        });
        this.countLikes();
      })
      .catch(console.error);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.componentDidMount(this.state.search);
    this.countLikes();
    this.setState({ [event.target.name]: "" });
  };

  countLikes = () => {
    const likes = document.getElementsByClassName("like").length;
    const dislikes = document.getElementsByClassName("dislike").length;
    this.setState({ countLikes: likes });
    this.setState({ countDislikes: dislikes });
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
        <br />
        <div>
          <p>In this list you like {this.state.countLikes} quotes</p>
          <p>In this list you dislike {this.state.countDislikes} quotes</p>
        </div>
        <br />
        <ul>
          {(this.state.fetching && "Loading...", console.log("loading"))}
          {!this.state.fetching &&
            this.state.quotes.map(quote => {
              return (
                <Quote key={quote._id} {...quote} counter={this.countLikes} />
              );
            })}
        </ul>
      </div>
    );
  }
}
