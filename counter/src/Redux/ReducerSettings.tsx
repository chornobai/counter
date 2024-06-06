import React from "react";


const CHANGE_MAX = "CHANGE_MAX"

const CHANGE_START="CHANGE_START"
 export const PUSH_SETTINGS = "PUSH_SETTINGS"
type actionType = {
    type:string
}
export type stateType = {
    maxValue:number
    startValue:number
    settings:boolean

}


const ReducerSettings = (state:stateType, action:actionType) => {
  switch(action.type) {
      case PUSH_SETTINGS :
            return {
                ...state,
                settings:true
            };
      default :
         throw new Error ("check Reducer")
    }
    return state


}

export {ReducerSettings}