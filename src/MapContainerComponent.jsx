import {useState} from 'react';
import { MapItemComponent } from './MapItemComponent';

export const MapContainerComponent=()=>{
    const products=[
        {id:1,name:'Apple',price:100.00},
        {id:2,name:'Banana',price:200.90},
        {id:3,name:'Orange',price:300.80},
        {id:4,name:'Pear',price:400.10},
        {id:5,name:'Grape',price:500.50}
    ]
    return(
        <>
        <h1>MapContainerComponent</h1>
        <table>
            <thead>
            </thead>
            <tbody>
                {products.map((p)=>(
                    <MapItemComponent key={p.id} product={p}/>
                ))}
            </tbody>
        </table>
        </>
    )
}