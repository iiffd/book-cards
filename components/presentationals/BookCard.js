import React, { Component } from 'react';


class BookCard extends Component {
  render() {
    return (
      <div>
        <img style={{width: 250, height: 323}}
          src={this.props.stateProps.cover}
        />
        <h2>{this.props.stateProps.title}</h2>
        <h2>{this.props.stateProps.author}</h2>
        <a href={this.props.stateProps.link}>
          {this.props.stateProps.link}
        </a>
      </div>
    )
  }
}

export default BookCard;
