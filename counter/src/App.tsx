import React, {ChangeEvent, useEffect, useState} from 'react';

import './App.css';
import { CounterResult } from './components/CounterResult';
import {SettingCounter} from "./components/SettingCounter/SettingCounter";
import useSound from "use-sound";
import btn from "./btn.mp3";
import resetbtn from "./reset.mp3";
import {restoreState, saveState} from "./Utils/localStorage";





function App() {
    let defaultmax = Number(restoreState("max", ""))
    let defaultstart = Number(restoreState("start", ""))
    let [play] = useSound(btn);
    let [reset] = useSound(resetbtn);
    const [maxValue, setMaxValue]=useState<number>(defaultmax)
    const [startValue, setStartValue]=useState<number>(defaultstart)
    const[settings, setSettings] = useState<boolean>(false)
    const [message, setMessage]=useState<string>("enter values and press Set")
    const[error, setError] = useState<string>("")
    let [count, setCount]=useState<number>(0);

    const onChangeStartValue = (e:ChangeEvent<HTMLInputElement>)=>{
        setStartValue(+e.currentTarget.value)
    }
    const onChangeMaxValue = (e:ChangeEvent<HTMLInputElement>)=>{
        setMaxValue(+e.currentTarget.value)
    }

    const onClickSet = ()=> {
setSettings(true)
        setCount(startValue)
        saveState("max", maxValue)
        saveState("start", startValue)
    }



    const resetDisabled =(count === startValue) ? true : false

    const incDisabled = () => {

    if (count === maxValue || maxValue < startValue) {
        return true
    }else{
        return false
    }


    }


    const addCount = () => {
        if(count < maxValue ){
            setCount(count +1);
        }

        play()

    }

    const resetCount = () => {
        setCount(startValue)
        reset()
    }

    const setDisable = () => {
        if(maxValue< 0 || startValue < 0){
            setSettings(true)
        }

    }
    useEffect(() => {
        if (startValue < 0 || maxValue < 0) {
            setError("Enter correct value");
        } else if (startValue >= maxValue) {
            setError("Start value should be less than Max value");
        } else {
            setError("");
        }
    }, [startValue, maxValue]);



  return (
    <div className="App">
      <header className="App-header">
          <SettingCounter max={maxValue}
                          start={startValue}
                          onChangeStart={onChangeStartValue}
                          onChangeMax={onChangeMaxValue}
                          onClickSet={onClickSet}
                          nameButton={"SET"}
                          disabled={settings}
                          setSettings={setSettings}
                          count={count}
                          />
      <CounterResult
          max={maxValue}
                    settings={settings}
                    count={count}
                    message={message}
                    error={error}
                    nameButtonInc= {"INC"}
                    nameButtonReset ={"RESET"}
                    disabledReset = {resetDisabled}
                    disabledInc={incDisabled}
                    onClickInc={addCount}
                    onClickReset={resetCount}

                     />
      </header>
    </div>
  );
}

export default App;
