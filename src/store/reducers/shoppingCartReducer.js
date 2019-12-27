import {ADD_ITEM, REMOVE_ITEM, ADD_QUANTITY, REMOVE_QUANTITY} from '../types';

const initialState = {
    shoppingCart: []
}

export const shoppingCartReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_ITEM: {
            let newState = {...state};
            let newItem = {...action.payload};
            let exists = newState.shoppingCart.filter((shirt)=>shirt.id === newItem.id);
            if (exists.length !== 0){
                newState.shoppingCart = newState.shoppingCart.map((shirt)=>{if(shirt.id === newItem.id){
                    shirt.quantity++;
                    shirt.total += shirt.price;
                    return shirt
                }
                else {
                    return shirt
                }
                });
                return newState
            }
            else{
                newItem['quantity'] = 1;
                newItem['total'] = newItem.price;
                newState.shoppingCart = newState.shoppingCart.concat([newItem]);
                return newState
            }
        }
        case REMOVE_ITEM: {
            let newState = {...state};
            let cart = newState.shoppingCart;
            newState.shoppingCart = cart.filter((item)=>item.id !== action.payload);
            return newState
        }

        case ADD_QUANTITY: {
            let newState = {...state};
            let cart = newState.shoppingCart.map((item)=>{
                if(item.id === action.payload){
                    item.quantity++;
                    item.total += item.price;
                    return item
                }
                else{
                    return item
                }
            });
            newState.shoppingCart = cart;
            return newState
        }

        case REMOVE_QUANTITY: {
            let newState = {...state};
            let cart = newState.shoppingCart.map((item)=>{
                if(item.id === action.payload){
                    item.quantity--;
                    item.total -= item.price;
                    if (item.quantity === 0){
                        item.id = -1;
                        return item
                    }
                    else {
                        return item
                    }  
                }
                else{
                    return item
                }
            });
            cart = cart.filter((item)=>item.id !== -1);
            newState.shoppingCart = cart;
            return newState
        }        

        default:
            return state
    }
}