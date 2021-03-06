import {applyMiddleware,compose,createStore} from 'redux'
import thunk from 'redux-thunk'
import RootReducers from './reducers'
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

const Store =createStore(
	RootReducers,
	composeEnhancers(applyMiddleware(thunk))
);

export default Store;