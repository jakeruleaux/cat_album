export default (state = [], action) => {
    console.log(state, 'red')
    switch (action.type) {
        case 'FETCH_CATS':
            return action.payload;
        default:
            return state;
    }
};