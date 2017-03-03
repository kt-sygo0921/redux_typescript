import {SEND , ACT,COUNTPLUS,COUNTMINUS} from './action';

let initialstate = {
    value:'あああ'
}

let initialstate_count = {
    count:0
}

export function actReducer(state=initialstate, action) {
    switch(action.type) {
        case ACT:
          return (<any>Object).assign({},state,{
            value: action.value
        })

        default:
        return state
    }
}

export function countReducer(state=initialstate_count,action) {
    switch(action.type) {
        case COUNTPLUS:
        return(<any>Object).assign({},state,{
            count:(state.count)+1
        })

        case COUNTMINUS:
        return(<any>Object).assign({},state,{
            count:(state.count)-1
        })

        default:
        return state
    }
}
