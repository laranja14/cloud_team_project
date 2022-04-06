import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callDataRequest } from '../actions'

class RanButton extends Component {

    render() {
        return (
            <input value={'Random'} type="button" onClick={this.props.callDataRequest} />
        )
    }
}

let mapDispatchToProps = (dispatch, /*ownProps*/) => {
    return {
        callDataRequest: () => dispatch(callDataRequest())
    };
};

RanButton = connect(null, mapDispatchToProps)(RanButton);

export default RanButton;