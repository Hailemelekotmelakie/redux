let initial = { list: [] }

const userReducer = (state = initial, action) => {
    switch (action.type) {
        case "ADD":
            return { list: [...state.list, action.pyload] }
        case "MINUS":
            return { list: [...state.list, (action.pyload)] }
        default:
            return state;
    }
}

export default userReducer