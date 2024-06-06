import {stateType} from "./ReducerSettings";

const INC = "INC"
const RESET="RESET"

export type stateCounterType = {
    counter:number


}
 type actionCounterType = {
    type:string
}


const ReducerCounter = (state:stateCounterType, action:actionCounterType)=>{
    switch (action.type){
        case INC :
            return {
                ...state,
                counter: state.counter+1
            }
        case RESET :
            return state

        default :
        throw new Error("check ReducerCounter")
    }
    return state
}

export{ReducerCounter, INC}