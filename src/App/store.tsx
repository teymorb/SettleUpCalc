import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import { calculator } from '../pages/calculator/reducer'

const store = configureStore({
    reducer: calculator.reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
})
 
 
export default store