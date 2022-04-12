import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchBtn from './MatchBtn'
import MatchBetline from './MatchBetline'

class MatchTest extends Component {
    render() {
        return (
            <div className="MatchTest" style={{ textAlign: "center", margin: "30px" }}>
                {/* <span>{this.props.match}</span><br /> */}
                {/* <MatchBetline list={this.props.match} /> */}
                <MatchBtn />
            </div>
        );
    }
}
//   const match = useSelector(state => state.matchReducer)

let mapStateToProps = (state, /*ownProps*/) => {
    return {
        match: state.matchReducer,
    };
};

MatchTest = connect(mapStateToProps, null,
    // (stateProps, dispatchProps, ownProps) => {
    //     console.log(stateProps, dispatchProps, ownProps);
    //     return {
    //         number: stateProps.number + 10
    //     };
    // }
)(MatchTest);

export default MatchTest;
