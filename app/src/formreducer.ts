import {SEND , ACT} from './action';

export function formReducer(state='',action) {
    switch(action.type) {
        case SEND:
        return (<any>Object).assign({},state, {
            value: action.value
        })
        default:
        return state
    }
}
