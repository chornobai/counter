import React, {ChangeEvent, useState} from "react";
import s from './SettingCounte.module.css'
import {Button} from "../Button/Button";

type SettingCounterType={
    max:number
    start:number
    onChangeMax:(e:ChangeEvent<HTMLInputElement>)=> void
    onChangeStart:(e:ChangeEvent<HTMLInputElement>)=> void
    onClickSet:()=> void
    nameButton:string
    disabled:boolean
count:any
    setSettings:(settings:boolean)=>void

}
const SettingCounter = (props:SettingCounterType) => {

    return (
        <section className={s.settings}>
            <h2>Настройки Счетчика</h2>
            <div className={s.settings_input}>
                <label className={s.label} htmlFor="input-max">
                    Max Value
                    <input  className={(props.max <0 || props.max<props.start) ? s.error : "" } value={props.max} onChange={props.onChangeMax}  type="number" id="input-max" name="input-max"/>
                </label>
                <label className={s.label} htmlFor="input-start">
                    Start Value
                    <input className={(props.start <0 || props.start>props.max) ? s.error : "" } value={props.start} onChange={props.onChangeStart}  type="number" id="input-start" name="input-start"/>
                </label>
            </div>
            <div className={s.setting_set}>
                <Button name={props.nameButton} onClick={props.onClickSet} disabled={(props.max <0 ||props.start<0)? true: props.disabled}/>
            </div>
        </section>

    )
}
export {SettingCounter}