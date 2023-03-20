import {useState} from 'react';

export default function StateComponent(){
    const [quantity,setQuantity]=useState(10);
    const [count,setCount]=useState(0);
    return(
        <div>
            <h6>UseState</h6>
            <button onClick={()=>setQuantity(20)}>Quantity Değiştir :Quantity={quantity}</button><br/>
            <button onClick={()=>setCount(count+1)}>{count}</button>
        </div>
    )
}