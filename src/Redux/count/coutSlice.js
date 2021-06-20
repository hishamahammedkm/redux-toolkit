import {createSlice} from '@reduxjs/toolkit'

const countSlice = createSlice({
    name:'count',
    initialState:{
        number:0,
    },
    reducers:{
        add:(state)=>{
            state.number +=1 
        },
        minus:(state)=>{
            state.number -=1 
        }
    }
    
})
export const {add,minus} = countSlice.actions
export default countSlice.reducer