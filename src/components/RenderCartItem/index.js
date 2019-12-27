import React from 'react';

export const RenderCartItem = (props) => {
    return <li key={props.index}>
        {props.item.name}
        / Price:{props.item.price}
        / <button onClick={()=>props.removeQuantityHandler(props.item.id)}>-</button>
        Quantity:{props.item.quantity}
        <button onClick={()=>props.addQuantityHandler(props.item.id)}>+</button>
        / Total:{props.item.total}
        <button onClick={()=>props.removeItemHandler(props.item.id)}>Remove</button>
    </li>
}