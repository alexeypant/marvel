import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectedApp from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { watchFetchCharacters } from './store/sagas/sagas';
import { sagaMiddleware, store } from './store';

sagaMiddleware.run(watchFetchCharacters);

ReactDOM.render(
    <Provider store={store}>
      <ConnectedApp/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
