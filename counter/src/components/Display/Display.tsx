import React from "react";
import s from "./Display.module.css"
type displayType = {
   error?:string
    count?:number
    settings?:boolean
    message?:string
    max:number

}
const Display:React.FC<displayType> =({max,error,count,settings,message})=>{
    return(
        <div className={(count===max && settings)? s.display_red : s.display_text}> {
            error ? error :  (settings? count: message)
        }</div>




    )
}

export {Display}