import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { createStore,applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
// import rootReducer from './reducers';
import {Provider} from 'react-redux'

import configureStore from './store/configureStore';

const store = configureStore();
// const store = createStore(rootReducer, {}, applyMiddleware(logger,thunk,promise()));

// store.subscribe(()=>console.log("State updata!",store.getState()));
// store.dispatch({type:'INCREMENT'}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
     document.getElementById('root')
);
if (module.hot) {
    module.hot.accept('./App', () => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root'),
      )
    })
  }
registerServiceWorker();
