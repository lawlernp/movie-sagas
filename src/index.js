import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";



// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_DETAILS', getDetails);

}

function* getMovies() {
  const moviesResponse = yield axios.get(`/api/movie/`);
  console.log("Movies!!", moviesResponse);
  yield put({ type: "SET_MOVIES", payload: moviesResponse.data });
}

function* getDetails() {
  const detailsResponse = yield axios.get(`/api/genre/`);
  console.log("Details!!", detailsResponse);
  yield put({ type: "SET_DETAILS", payload: detailsResponse.data });
}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
