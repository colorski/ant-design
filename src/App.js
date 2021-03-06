import React, { Component } from 'react';
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducer'
import AppContainer from './containers/AppCtn'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)(createStore)

function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)
  // if (module.hot) {
  //   // inferno dev tools 会影响到函数组件的属性生命周期函数执行
  //   // require('inferno-devtools')
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept(/*'rdc/customerIndex', () => {
  //     const nextRootReducer = require('rdc/customerIndex')
  //     store.replaceReducer(nextRootReducer)
  //   }*/)
  // }

  return store
}

let initialState = {}
const store = configureStore(initialState)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }

}
export default App;