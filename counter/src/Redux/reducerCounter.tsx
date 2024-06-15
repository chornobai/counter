import React from "react";
import {restoreState, saveState} from "../Utils/localStorage";
const INC = "INC"
const RESET="RESET"
const SET="SET"
const CHANGE_MAX = "CHANGE_MAX"
const CHANGE_START = "CHANGE_START"
const DISABLE_INC = "DISABLE_INC"
const DISABLE_RESET = "DISABLE_RESET"
const DISABLE_SET = "DISABLE_SET"

const restoreMax = Number(restoreState("max", ""))
const restoreStart = Number(restoreState("start", ""))
export type initialStateCounterType = {
    max:number,
    start:number,
    count:number,
    message:string,
    error:string,
    settings:boolean
    valueMax:any,
    valueStart:any
    disableInc:boolean
    disableReset:boolean
    disableSet:boolean
}

export const initialStateCounter:initialStateCounterType = {
    max:restoreMax,
    start:restoreStart,
    count:0,
    message:"enter values and press SET",
    error:"",
    settings:false,
    valueMax:0,
    valueStart:0,
    disableInc:true,
    disableReset:true,
    disableSet:false

}


// ActionCreaters & ACTypes
export const resetCounterAC = ()=>{
  return {type: "RESET"
  }as const
}
export const setCounterAC = ()=> {
   return{type:"SET"} as const
}
export const incActionCreater = ()=> {
 return {type: INC}as const
}
export const changeMaxActionCreater = (newMaxValue:any)=> {
    return {type: CHANGE_MAX, valueMax:newMaxValue}as const
}
export const changeStartActionCreater = (newStartValue:any)=> {
    return {type: CHANGE_START,valueStart:newStartValue}as const
}
export const disableIncActionCreater = ()=> {
    return {type: DISABLE_INC}as const
}
export const disableResetActionCreater = ()=> {
    return {type: DISABLE_RESET}as const
}
export const disableSetActionCreater = ()=> {
    return {type: DISABLE_SET}as const
}

export type incCounterActionType=ReturnType<typeof incActionCreater>
export type resetCounterActionType=ReturnType<typeof resetCounterAC>
export type setCounterActionType=ReturnType<typeof setCounterAC>
export type changeMaxActionType=ReturnType<typeof changeMaxActionCreater>
export type changeStartActionType=ReturnType<typeof changeStartActionCreater>
export type disableIncActionType=ReturnType<typeof disableIncActionCreater>
export type disableResetActionType=ReturnType<typeof disableResetActionCreater>
export type disableSetActionType=ReturnType<typeof disableSetActionCreater>

type actionTypeCounter = incCounterActionType |
    resetCounterActionType |
    setCounterActionType |
    changeMaxActionType|
    changeStartActionType|
    disableIncActionType|
    disableResetActionType|
    disableSetActionType
const errorConditions = (max:number, start:number)=>{
    if (max < 0 || start < 0) return { disableSet: true, error: "enter correct value" };
    if (start > max) return { disableSet: true, error: "max > start" };
    return { disableSet: false, error: "" }
}
const reducerCounter = (state:initialStateCounterType=initialStateCounter, action:actionTypeCounter)=> {
    switch(action.type){
        case INC:
            return {...state, count: state.count + 1}
        case RESET:
            return {...state, count: state.start}
        case SET:
            saveState("max", state.max);
            saveState("start", state.start);
            return {...state, settings:true, disableSet:true}
        case CHANGE_MAX:
            return {...state, max:action.valueMax, ...errorConditions(action.valueMax, state.start)}
        case CHANGE_START:
            return {...state, start:action.valueStart,...errorConditions(state.max, action.valueStart)}
        case DISABLE_INC:
            return{...state, disableInc: state.count === state.max || state.max < state.start}
        case DISABLE_RESET:
            return { ...state, disableReset: !(state.settings && state.count === state.max) };
        case DISABLE_SET: return { ...state, ...errorConditions(state.max, state.start), disableSet: state.settings ? true : state.disableSet };
        default:
            return state

    }

}




export {reducerCounter}