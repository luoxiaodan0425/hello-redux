import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import {Provider} from 'react-redux'

const store = createStore(rootReducer, {}, applyMiddleware(logger));

// store.subscribe(()=>console.log("State updata!",store.getState()));
// store.dispatch({type:'INCREMENT'}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
     document.getElementById('root')
);


registerServiceWorker();
