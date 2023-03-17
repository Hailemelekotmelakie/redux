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
const actionUpdata = (data) => {
    return {
        type: "UPDATE",
        pyload: data
    }
}

export { actionAdd, actionMinus, actionUpdata }