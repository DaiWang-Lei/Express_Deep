import { ADD_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM } from "./actionTypes";

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const addItemAction = () => ({
    type:ADD_ITEM
})

export const deleteItemAction = (index) =>({
    type:DELETE_ITEM,
    index
})