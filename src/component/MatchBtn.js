import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callMatchRequest } from '../actions';

class MatchButton extends Component {
    render() {
        return (
            <input value={'MatchBtn'} type="button" onClick={this.props.callMatchRequest} />
        )
    }
}

let mapDispatchToProps = (dispatch, /*ownProps*/) => {
    return {
        callMatchRequest: () => dispatch(callMatchRequest())
    };
};

MatchButton = connect(null, mapDispatchToProps)(MatchButton);

export default MatchButton;