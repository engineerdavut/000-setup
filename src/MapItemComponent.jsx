import {useState} from 'react';
export const MapItemComponent=({product})=>{
    return(
        <>
        <ul>
            <li>{product.id}</li>
            <li>{product.name}</li>
            <li>{product.price}</li>
        </ul>
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{product.price}</div>
        </>
    )
}