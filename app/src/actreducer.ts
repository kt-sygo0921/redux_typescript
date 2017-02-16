import {SEND , ACT} from './action';

let initialstate = {
    value:'あああ'
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

