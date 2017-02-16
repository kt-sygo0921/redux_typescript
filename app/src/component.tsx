import * as React from 'react';
import {connect} from 'react-redux';
import {act} from './action';

/*Acttionのインポート*/
/*あとで*/

class testredux extends React.Component<any,any> {
    render(){
        console.log(this.props.value);
        return(
            <div onLoad={this.props.hoge(this.props.value)}>
                {this.props.value}
            </div>
        )
    }
}

function mapStateProps(state) {
    console.log(state);
    return{
        value: state.actReducer.value
    }
}

function mapDispatchProps(dispatch) {
    return {
        hoge(value) {
            dispatch(act(value));
        }
    }
}

export const AppContainer = connect (
    mapStateProps,
    mapDispatchProps
)(testredux)
