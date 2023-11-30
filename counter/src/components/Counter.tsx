import React from 'react';
import useSound from 'use-sound';
import s from "./Counter.module.css"
import { useState } from 'react';
import btn from './../btn.mp3';
const Counter = (props:any)=> {
    let [count, setCount]=useState(0);
    let [play] = useSound(btn);
const addCount = () => {
 if(count < 5 ){
    setCount(count +1); 
 }
 play()
    
}

const resetCount = () => {
    setCount(0)
}


const resetDisabled = (count:number ) => {
   if (count === 0) {
    return true
   }else{
    return false
   }
}

const incDisabled = (count:number ) => {
    if (count === 5) {
     return true
    }else{
     return false
    }
 }




    return(
<section className={s.counter}>
<h1 className={s.counter_header}>Счетчик</h1>
<div className={s.counter_block}>
    <div className={count > 0 ? `${s.count_number} ${s.count_red}` : `${s.count_number}`}>{count}</div>
    <div className={s.count_controls}>
    <button className={`${s.counter_btn} ${s.btn}`} onClick={addCount} disabled={incDisabled(count)} >inc</button>
    <button className={`${s.counter_reset_btn} ${s.btn}`} onClick={resetCount} disabled={resetDisabled(count)} >reset</button></div>
</div>
</section>
    )
        
   
}
export {Counter}