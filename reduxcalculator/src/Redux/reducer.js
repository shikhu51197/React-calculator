import {INCREMENT_COUNTER,DECREMENT_COUNTER, ADD_COUNTER, SUBTRACT_COUNTER, MULTIPLY_COUNTER, DIVIDE_COUNTER, RESET} from './actionType'
const iniState = {
    counter:0
};

const reducer = (state=iniState,{type,payload})=>{
    switch (type) {
        case INCREMENT_COUNTER:
            return{
                ...state,
                counter: state.counter + payload
            }
        case DECREMENT_COUNTER:
            return{
                ...state,
                counter: state.counter - payload
            }
        case ADD_COUNTER:
            return{
                ...state,
                counter: state.counter + Number(payload)
            }
        case SUBTRACT_COUNTER:
            return{
                ...state,
                counter: state.counter - Number(payload)
            }
        case MULTIPLY_COUNTER:
            return{
                ...state,
                counter: state.counter * Number(payload)
            }
        case DIVIDE_COUNTER:
            return{
                ...state,
                counter: state.counter / Number(payload)
            }
        case RESET:
            return{
                ...state,
                counter: iniState.counter
            }
        default:
            return state
    }
}

export {reducer}