import React, {ChangeEvent} from "react";
import s from './SettingCounte.module.css'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";


type SettingCounterType={
    max:number
    start:number
    onChangeMax:(e:ChangeEvent<HTMLInputElement>)=> void
    onChangeStart:(e:ChangeEvent<HTMLInputElement>)=> void
    onClickSet:()=> void
    nameButton:string
    disabled:boolean
    error:string
count:any


}
const SettingCounter = (props:SettingCounterType) => {

    return (
        <section className={s.settings}>
            <h2>Настройки Счетчика</h2>
            <div className={s.settings_input}>
                <Input value={props.max} onChangeInput={props.onChangeMax} idInput={"input-max"} nameLabel={"Max value"} error={props.error}/>
               <Input value={props.start} onChangeInput={props.onChangeStart} idInput={"input-start"} nameLabel={"Start value"} error={props.error}/>
            </div>
            <div className={s.setting_set}>

                <Button name={props.nameButton} onClick ={props.onClickSet} disabled={ props.disabled}/>
            </div>
        </section>

    )
}
export {SettingCounter}