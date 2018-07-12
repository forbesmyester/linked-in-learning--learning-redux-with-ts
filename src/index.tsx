import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './reducers/index';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// console.log(thunk);
// const myCreateStore = (createStore);
// const myCreateStore = applyMiddleware(thunk)(createStore);

const store = createStore(
    reducer,
    {
        allSkiDays: [{
            backcountry: false,
            date: new Date(),
            powder: false,
            resort: 'X'
        }],
        errors: [],
        goal: 1,
        resortNames: {
            fetching: false,
            suggestions: ['Y']
        }
    },
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    (
        <Provider store={store}><App/></Provider>
    ),
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
