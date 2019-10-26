import React from "react";
import { Link } from "react-router-dom";
//import Button from "@material-ui/core/Button";

export default class Quote extends React.Component {
  state = {
    likes: ""
  };

  handleLike = evt => {
    if (evt.target.name === "like") {
      evt.target.previousSibling.previousSibling.classList.remove("dislike");
      evt.target.previousSibling.previousSibling.classList.add("like");
      this.setState({ likes: "like" });
      this.props.counter();
    }
    if (evt.target.name === "dislike") {
      evt.target.parentNode.firstChild.classList.remove("like");
      evt.target.parentNode.firstChild.classList.add("dislike");
      this.setState({ likes: "dislike" });
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
        <button
          variant="contained"
          color="primary"
          name="like"
          onClick={this.handleLike}
        >
          Like
        </button>
        <button
          variant="contained"
          color="primary"
          name="dislike"
          onClick={this.handleLike}
        >
          Dislike
        </button>
      </div>
    );
  }
}
