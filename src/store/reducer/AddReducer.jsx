const initState = {
    total: 0

}
const AddReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            const { Users } = action.payload;
            console.log("xx", Users)
        default:
            return state
    }
}

export default AddReducer;