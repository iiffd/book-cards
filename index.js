import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import BooksApp from './reducers/BooksApp';
import Books from './components/containers/Books';

class App extends React.Component {
  render() {
    return (
      <div>
        <Books store={store} />
      </div>
    )
  }
}

//initialize store
let store = createStore(BooksApp)
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)