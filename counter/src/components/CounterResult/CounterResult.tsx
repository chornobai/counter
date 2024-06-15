import React from 'react';

import s from "./CounterResult.module.css"
import {Button} from "../Button/Button";
import {Display} from "../Display/Display";
import {ButtonGroup} from "@mui/material";

type CounterResultType= {
    count:number
    error:string
    message:string
    nameButtonInc:string
    nameButtonReset:string
    settings:boolean
    disabledReset :boolean
    disabledInc:boolean
    onClickInc:()=> void
    onClickReset:()=> void
    max:number

}

const CounterResult = (props:CounterResultType)=> {

    return(
<section className={s.counter}>
    <div className={s.counter_block}>
        <h1 className={s.counter_header}>Счетчик</h1>
        <Display max={props.max} count={props.count} message={props.message} settings={props.settings}
                 error={props.error}/>

        <div className={s.count_controls}>

            <Button name={props.nameButtonInc} disabled={props.settings ? props.disabledInc: true}
                    onClick={props.onClickInc}/>
            <Button name={props.nameButtonReset} disabled={props.disabledReset}
                    onClick={props.onClickReset}/>

        </div>
    </div>
</section>
    )


}
export {CounterResult}