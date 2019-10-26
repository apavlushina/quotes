import React from "react";
//import Button from "@material-ui/core/Button";

export default class Quote extends React.Component {
  state = {
    likes: ""
  };

  handleLike = evt => {
    if (evt.target.name === "like") {
      //   console.log("it was like", this.props._id);
      evt.target.previousSibling.previousSibling.classList.remove("dislike");
      evt.target.previousSibling.previousSibling.classList.add("like");
    }
    if (evt.target.name === "dislike") {
      console.log("it was dislike", this.props._id);
      evt.target.previousSibling.previousSibling.previousSibling.classList.remove(
        "like"
      );
      evt.target.previousSibling.previousSibling.previousSibling.classList.add(
        "dislike"
      );
    }
    return;
  };

  render() {
    return (
      <div>
        <p className="quote">{this.props.quoteText}</p>
        <p>By: {this.props.quoteAuthor}</p>
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
