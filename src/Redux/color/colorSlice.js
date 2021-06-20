import {createSlice} from '@reduxjs/toolkit'
export const colorSilice = createSlice({
    name:'color',
    initialState:{
        value:'green'
    },
    reducers:{
        change_color:(state,action)=>{
            state.value = action.payload.color
        }
    }
   
})

export const {change_color} = colorSilice.actions
export default colorSilice.reducer