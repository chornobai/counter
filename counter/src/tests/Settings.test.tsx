import {PUSH_SETTINGS, ReducerSettings} from "../Redux/ReducerSettings";
import {stateType} from "../Redux/ReducerSettings";

let state:stateType
beforeEach(()=>{
     state=  {
        maxValue:1,
        startValue:0,
        settings:false

    }
})
test("after press SET boolean = true", () => {

    // const state:stateType =  {
    //     maxValue:1,
    //     startValue:0,
    //     settings:false
    //
    // }
    const newState:stateType = ReducerSettings(state, {type:PUSH_SETTINGS})


    expect(newState.settings).toBe(true)

}
    )