import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import rootReducer from '../reducers/root-reducer'
// import rootSaga from '../saga/root-saga'
import rootSaga from '../saga/index'

const bindMiddleware = (middleware) => {
    if (true) {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const makeStore = context => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}

const wrapper = createWrapper(makeStore, { debug: true })

export default wrapper