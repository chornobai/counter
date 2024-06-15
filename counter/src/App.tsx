import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';

import './App.css';
import { CounterResult } from './components/CounterResult/CounterResult';
import {SettingCounter} from "./components/SettingCounter/SettingCounter";
import useSound from "use-sound";
import btn from "./btn.mp3";
import resetbtn from "./reset.mp3";

import {useDispatch, useSelector} from "react-redux";
import store, {appRootType} from "./Redux/store";

import {
    changeMaxActionCreater,
    changeStartActionCreater, disableIncActionCreater, disableResetActionCreater, disableSetActionCreater,
    incActionCreater,
    initialStateCounterType,
    resetCounterAC,
    setCounterAC
} from "./Redux/reducerCounter";






function App() {

    let [play] = useSound(btn);
    let [reset] = useSound(resetbtn);
    let dispatch= useDispatch()
    let counter = useSelector<appRootType, initialStateCounterType>(state => state.reducerCounter)


    const onChangeStartValue =useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        dispatch(changeStartActionCreater(+e.currentTarget.value))
        dispatch(disableSetActionCreater())
    }, [dispatch])
    const onChangeMaxValue =useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        dispatch(changeMaxActionCreater(+e.currentTarget.value))
        dispatch(disableSetActionCreater())
        dispatch(disableResetActionCreater())
    }, [dispatch])
    const onClickSet = useCallback(()=> {
        dispatch(setCounterAC())

    }, [dispatch])
    const addCount =useCallback(() => {
        dispatch(incActionCreater())

        play()

    },[dispatch,play])
    const resetCount =useCallback(() => {
        dispatch(resetCounterAC())
        reset()
    },[dispatch,reset])

    useEffect(() => {
        dispatch(disableResetActionCreater());
        dispatch(disableIncActionCreater());
    }, [dispatch, counter.count, counter.max, counter.start]);
  return (
    <div className="App">
      <header className="App-header">
          <SettingCounter max={counter.max}
                          start={counter.start}
                          onChangeStart={onChangeStartValue}
                          onChangeMax={onChangeMaxValue}
                          onClickSet={onClickSet}
                          nameButton={"SET"}
                          disabled={counter.disableSet}
                          count={counter.count}
                          error={counter.error}
                          />

      <CounterResult
                    max={counter.max}
                    settings={counter.settings}
                    count={counter.count}
                    message={counter.message}
                    error={counter.error}
                    nameButtonInc= {"INC"}
                    nameButtonReset ={"RESET"}
                    disabledReset = {counter.disableReset}
                    disabledInc={counter.disableInc}
                    onClickInc={addCount}
                    onClickReset={resetCount}

                     />

      </header>
    </div>
  );
}

export default App;
