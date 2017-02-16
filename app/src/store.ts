import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {combine} from './reducer';

const initialState = {
    value:null
}

export const store = createStore(combine);
