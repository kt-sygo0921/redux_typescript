export const SEND = 'SEND';
export const ACT = 'ACT';

export function send(value) {
    return {
        type:SEND,
        value
    }
}

export function act(value) {
    return {
        type: ACT,
        value:value
    }
}
