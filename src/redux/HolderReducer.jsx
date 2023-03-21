import { useDispatch, useSelector } from "react-redux";
const initialState={
    quantity : 0
}
export function HolderReducer(state=initialState,action){
    switch(action.type){
        case 'quantity/increment':
            return {
                quantity: state.quantity +1
            }
        case 'quantity/decrement':
            return {
                quantity: state.quantity -1
            }
        case 'quantity/add':
            return {
                quantity: state.quantity +Number(action.delta)
            }
        default :
            return state
    }
}