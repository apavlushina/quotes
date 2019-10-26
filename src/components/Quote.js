import React from "react";
import { Link } from "react-router-dom";

export default class Quote extends React.Component {
  handleLike = evt => {
    if (evt.target.name === "like") {
      evt.target.previousSibling.previousSibling.classList.remove("dislike");
      evt.target.previousSibling.previousSibling.classList.add("like");
      this.props.counter();
    }
    if (evt.target.name === "dislike") {
      evt.target.parentNode.firstChild.classList.remove("like");
      evt.target.parentNode.firstChild.classList.add("dislike");
      this.props.counter();
    }
    return;
  };

  render() {
    return (
      <div>
        <p className="quote">{this.props.quoteText}</p>
        <p>
          <Link to={`/oneauthor/${this.props.quoteAuthor}`}>
            By: {this.props.quoteAuthor}
          </Link>
        </p>
        <button name="like" onClick={this.handleLike}>
          Like
        </button>
        <button name="dislike" onClick={this.handleLike}>
          Dislike
        </button>
      </div>
    );
  }
}
