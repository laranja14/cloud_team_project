import { createStore } from 'redux';

var initState = {
    mode: 'WHLCOME',

    welcom_content: {
        title: 'WEB',
        desc: 'Hello, WEB'
    },

    selected_content_id: 1,

    contents: [
        { id: 1, title: 'HTML', desc: 'HTML is ...' },
        { id: 2, title: 'CSS', desc: 'CSS is ...' },
        { id: 3, title: 'REDUX', desc: 'REDUX is ...' }
    ]
}


function reducer(state, action) {

    return state;

}

export default createStore(reducer);