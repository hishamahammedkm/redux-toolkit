import {configureStore} from '@reduxjs/toolkit'
import colorReducer from './color/colorSlice'
import countReducer from './count/coutSlice'
export default configureStore({
    reducer:{
        color:colorReducer,
        countState:countReducer,
        
    }
})