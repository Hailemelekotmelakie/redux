const actionAdd = (data) => {
    return {
        type: "ADD",
        pyload: data
    }
}
const actionMinus = (data) => {
    return {
        type: "MINUS",
        pyload: data
    }
}

export { actionAdd, actionMinus }