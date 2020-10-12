export default (state = [], action) => {
    console.log(state, 'red2')
    switch (action.type) {
        case 'SEND_CATS':
            state.push(action.payload);
        default:
            return state;
    }
};