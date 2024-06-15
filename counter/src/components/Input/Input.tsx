import s from "../SettingCounter/SettingCounte.module.css";
import React, {ChangeEvent} from "react";

type inputCounterType = {
   value:number
   onChangeInput:(e:ChangeEvent<HTMLInputElement>)=>void,
   idInput:string,
   nameLabel?:string
    error?:string

}
const Input:React.FC<inputCounterType> = ({
    value,onChangeInput,idInput,nameLabel,error
               }) => {
   return (
       <><label className={s.label} htmlFor={idInput}>
          {nameLabel}
          <input className={error? s.error : ""} value={value}
                 onChange={onChangeInput} type="number" id={idInput} name={idInput}/>
       </label></>
   )
}
export {Input}