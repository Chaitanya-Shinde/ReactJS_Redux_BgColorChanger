import { SET_COLOR } from "./ColorType"

export const setColor = (currentColor) => {
    return{
        type: SET_COLOR,
        payload: currentColor
    }
}