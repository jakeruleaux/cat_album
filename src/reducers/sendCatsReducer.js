export default (state = [], action) => {
    switch (action.type) {
        case 'SEND_CATS':
            state.push(action.payload);
        default:
            return state;
    }
};