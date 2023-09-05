import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension'
// import logger from 'redux-logger';
import user from './planner.redux';

const STORE = (preloadedState: any = {}) => {
    const reducer = combineReducers({ user })
    // const middleware = [logger]
    
    // const enhancers = [devToolsEnhancer({  })]

    const store = configureStore({
        reducer,
        // middleware,
        devTools: true,
        preloadedState,
    });
    return store;
}

export default STORE
