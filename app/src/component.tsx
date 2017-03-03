import * as React from 'react';
import {connect} from 'react-redux';
import {act,countplus,countminus} from './action';

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


class count extends React.Component<any,any> {
    render() {
        return (
            <div>
                <input type="button" onClick={() => this.props.countplus(this.props.count)} value="+1"/>
                <input type="button" onClick={() => this.props.countminus(this.props.count)} value="-1"/>
                {this.props.count}
            </div>
        )
    }
}

function mapStatetoProps_count(state) {
    return state.countReducer
}

function mapDispatchtoProps_count(dispatch) {
    return {
        countplus() {
            dispatch(countplus(count));
        },
        countminus() {
            dispatch(countminus(count));
        }
    }
}

export const CountComponent = connect(
    mapStatetoProps_count,
    mapDispatchtoProps_count
)(count)
