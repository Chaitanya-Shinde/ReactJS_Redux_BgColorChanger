import { SET_COLOR } from "./ColorType"

const initState={
    currentColor: localStorage.getItem('color') || "#ffffff"
}

const colorReducer = (state = initState,action)=>{
    switch(action.type){
        case SET_COLOR: return{
            ...state,
            currentColor: action.payload
        }
        default: return state
    }
}

export default colorReducer