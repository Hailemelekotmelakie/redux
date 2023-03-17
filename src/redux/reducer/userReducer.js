let initial = { list: [] }

const userReducer = (state = initial, action) => {
    switch (action.type) {
        case "ADD":
            return { list: [...state.list, action.pyload] }
        case "MINUS":
            const Filtered = state.list.filter(list => list.id !== action.pyload.id);
            return { list: [...Filtered] }
        case "UPDATE":
            const result = state.list.map(list => {
                if (list.id === action.pyload.id) {
                    list.name = action.pyload.name
                }
                return list
            });
            return { list: [...result] }
        default:
            return state;
    }
}

export default userReducer