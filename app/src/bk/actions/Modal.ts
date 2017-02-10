import * as ActionTypes from './ActionTypes';

export function modalOpen(dec):{} {
    return {
        type: ActionTypes.MODAL_OPEN,
        show: dec
    }
}
