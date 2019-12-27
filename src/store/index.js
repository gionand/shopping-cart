import {createStore} from 'redux';
import {shoppingCartReducer} from './reducers/shoppingCartReducer'

export const store = createStore(shoppingCartReducer);