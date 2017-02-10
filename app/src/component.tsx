import React,{Component} from 'react';
import {connect} from 'react-redux';

/*Acttionのインポート*/
/*あとで*/

export class App extends React.Component<any,any> {
    render() {
        return (
            <div>
                <input type="text" ref='input' /><br/>
                <button onClick= {(e) => this.onAddBtnClicked(e)}>Add</button>
                <button>clear</button>
                <ul>

                </ul>
            </div>
        )
    }
    onAddBtnClicked(e) {
        let input = this.refs.input
        let text = input.value.trim()
        if(!text) {
            return alert('何かテキストを入力してください')
        }
        input.value = '';
        this.props.dispatch(addText(text))
    }
}
