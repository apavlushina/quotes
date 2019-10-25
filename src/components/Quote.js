import React from "react";

export default class Quote extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.quoteText}</p>
        <p>By: {this.props.quoteAuthor}</p>
      </div>
    );
  }
}
