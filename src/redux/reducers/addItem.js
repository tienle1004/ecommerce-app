const addItem = JSON.parse(localStorage.getItem('cart')) || [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM":
            return [
                ...state,
                action.payload
            ]
        case "REMOVEITEM":
            return state = state.filter(x => {
                return x.id !== action.payload.id
            })
        default: return state
    }
}

export default addItems;