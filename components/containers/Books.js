import React, { Component } from 'react';
import { getState } from 'redux';

import BookCard from '../presentationals/BookCard';

class Books extends Component {
  render() {
    const stateProps = this.props.store.getState();
    return (
      <div>
        <BookCard stateProps={stateProps} />
      </div>
    )
  }
}

export default Books;
