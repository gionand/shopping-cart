import {ADD_ITEM, REMOVE_ITEM, ADD_QUANTITY, REMOVE_QUANTITY} from '../types';

export const addItemAction = (shirt) => {
    return {
    type: ADD_ITEM,
    payload: shirt
    }
}

export const removeItemAction = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}

export const addQuantityAction = (id) => {
    return {
        type: ADD_QUANTITY,
        payload: id
    }
}

export const removeQuantityAction = (id) => {
    return {
        type: REMOVE_QUANTITY,
        payload: id
    }
}