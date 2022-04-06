import React, { Component } from 'react'
import { connect } from 'react-redux'
import RanButton from './RanButton'

class RanNumTest extends Component {
    render() {
        return (
            <div className="RanNumTest" style={{ textAlign: "center", margin: "30px" }}>
                <span>{this.props.number}</span><br />
                <RanButton />
            </div>
        );
    }
}

let mapStateToProps = (state, /*ownProps*/) => {
    return {
        number: state.ranNumReducer.number,

    };
};

RanNumTest = connect(mapStateToProps, null,
    // (stateProps, dispatchProps, ownProps) => {
    //     console.log(stateProps, dispatchProps, ownProps);
    //     return {
    //         number: stateProps.number + 10
    //     };
    // }
)(RanNumTest);

export default RanNumTest;
