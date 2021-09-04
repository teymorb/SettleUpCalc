import { createStore, StoreEnhancer, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { calculator} from '../pages/calculator/reducer'

const store = createStore(
    combineReducers({
        calculator: calculator.reducer,
    }),
    applyMiddleware(
        thunkMiddleware,
      createLogger(),
    )
)
 
 
export default store