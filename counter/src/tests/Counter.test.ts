import {
    incActionCreater,
    initialStateCounterType,
    reducerCounter,
    resetCounterAC,
    setCounterAC
} from "../Redux/reducerCounter";

let startState: initialStateCounterType

beforeEach(()=>{
startState =
    {
        max: 5,
        start: 1,
        count: 0,
        message: "enter values and press SET",
        error: "",
        settings: false,
        valueMax: 0,
        valueStart: 0,
        disableInc: true,
        disableReset: true,
        disableSet: false
    }
})
test("while press inc button counter increases on 1", ()=>{
   const endState = reducerCounter(startState, incActionCreater())


    expect(endState.count).toBe(1)
})
test("once press reset button count and start value should be equal", ()=>{
    const endState = reducerCounter(startState, resetCounterAC())


    expect(endState.count).toBe(1)
})

test("once press SET button  settings = true", ()=>{
    const endState = reducerCounter(startState, setCounterAC())



    expect(endState.settings).toBe(true)
})