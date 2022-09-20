export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

//Remove items
export const DLT = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id
    }
}


//remove individual items
export const REMOVE = (iteam) => {
    return {
        type: "REMOVE_ONE",
        payload: iteam
    }
}