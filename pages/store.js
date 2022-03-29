import { createStore } from 'redux';

var initState = {
    welcom_content: {
        title: 'WEB',
        desc: 'Hello, WEB'
    }
}


function reducer(state, action) {

    return state;

}

export default createStore(reducer);