import {bindActionCreators} from 'redux';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from '../components/Modal';
import {modalOpen} from '../actions/Modal';

class App extends Component<any, any> {
    componentWillMount() {}

    handleModalOpen() {
        this.props.modalOpen(true)
    }
    handleModalClose() {
        this.props.modalOpen(false)
    }
    render():JSX.Element {
        const {show} = this.props;
        return(
            <div className="i-wrapper">
                <div className="c-container">
                    <h1 className="c-title c-title--primary">Modal</h1>
                    <button className="c-btn c-btn-primary--flat" onClick={this.handleModalOpen.bind(this)}>Modal Open</button>
                    <Modal
                    handleModalOpen={this.handleModalOpen.bind(this)}
                    handleModalClose={this.handleModalClose.bind(this)}
                    show={show}
                    >
                        モーダル内容
                    </Modal>
                </div>
            </div>
        )
    }
}

function mapStateProps(state) {
    return {
        show: state.Modal.show
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({},{modalOpen}),dispatch)
}

export default connect (mapStateProps, mapDispatchToProps)(App)
