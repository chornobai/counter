import {INC, ReducerCounter, stateCounterType} from "../Redux/ReducerCounter";

let stateCounter:stateCounterType

beforeEach(()=>{
    stateCounter = {
        counter:0
    }
})
test("in case of press INC button Counter increase on 1 point", ()=>{
    const newState  = ReducerCounter(stateCounter,{type:INC})

    expect(newState.counter).toBe(1)

})