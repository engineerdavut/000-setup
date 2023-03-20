import {useState} from 'react';
export const TableComponent=()=>{
    const products=[
        {id:1,name:'Apple',price:100.00},
        {id:2,name:'Banana',price:200.90},
        {id:3,name:'Orange',price:300.80},
        {id:4,name:'Pear',price:400.10},
        {id:5,name:'Grape',price:500.50}
    ]
    return(
        <>
        <h1>TableComponent</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}