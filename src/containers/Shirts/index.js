import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addItemAction, removeItemAction, addQuantityAction, removeQuantityAction} from '../../store/actions/shoppingCartActions';
import {RenderShirt} from '../../components/RenderShirt';
import {RenderCartItem} from '../../components/RenderCartItem';

class Shirts extends Component {
    state = {
        items: [
            { id: 1, name: 'shirt1', price: 13 },
            { id: 2, name: 'shirt2', price: 14 },
            { id: 3, name: 'shirt3', price: 17 },
            { id: 4, name: 'shirt4', price: 11 },
            { id: 5, name: 'shirt5', price: 16 }
        ]
    }

    addItemHandler = (item) => this.props.dispatch(addItemAction(item))

    removeItemHandler = (id) => this.props.dispatch(removeItemAction(id))

    addQuantityHandler = (id) => this.props.dispatch(addQuantityAction(id))

    removeQuantityHandler = (id) => this.props.dispatch(removeQuantityAction(id))

    finalPrice = (cart) => {
        let finalPrice = 0;
        cart.forEach((element) => {
            finalPrice += element.total;
        })
        return finalPrice
    }

    render() {
        return (
            <>
               <ul>
                    {this.state.items.map((shirt) => {
                        return <RenderShirt shirt={shirt} addItemHandler={this.addItemHandler}/>
                    }) }
                </ul>
                <h2>Shopping Cart:</h2>
                <ul>
                    {this.props.shoppingCart.map((item, index) => {
                        return <RenderCartItem 
                        index={index} 
                        item={item} 
                        removeItemHandler={this.removeItemHandler}
                        removeQuantityHandler={this.removeQuantityHandler}
                        addQuantityHandler={this.addQuantityHandler}
                        />
                    })}
                </ul>
                <p>Final Price:{this.finalPrice(this.props.shoppingCart)}</p>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps)(Shirts)