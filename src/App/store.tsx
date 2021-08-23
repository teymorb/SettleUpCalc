import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { questionaire } from '../pages/calculator/reducer'
import {QuestionaireState} from "../pages/calculator/state";


const store = createStore(
    combineReducers({
        questionaire: questionaire.reducer,
    }),
    applyMiddleware(
        thunkMiddleware,
      createLogger(),
    )

)
export default store