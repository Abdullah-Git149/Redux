const initState = {
    Users: [
        { id: 1, name: "Admin", read: false, write: false, create: false, delete: false },
        { id: 2, name: "Staff", read: false, write: false, create: false, delete: false },
        { id: 3, name: "Author", read: false, write: false, create: false, delete: false },
        { id: 4, name: "Contributor", read: false, write: false, create: false, delete: false },
        { id: 5, name: "SimpleUser", read: false, write: false, create: false, delete: false },


    ],
    
}
const CheckReducer = (state = initState, action) => {
    switch (action.type) {
        
        default:
            return state
    }
}

export default CheckReducer;