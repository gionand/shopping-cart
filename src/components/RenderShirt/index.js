import React from 'react';

export const RenderShirt = (props) => {
    return <li
        key={props.shirt.id}
        onClick={() => props.addItemHandler(props.shirt)}
    >{props.shirt.name}/ Price:{props.shirt.price}</li>
}