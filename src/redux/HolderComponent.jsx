import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { useState } from "react";
import {Autocomplete} from "@mui/material";

const options = ['Monday', 'Tuesday', 'Thursday', 
'Friday', 'Saturday', 'Sunday']

export function HolderComponent(){
    const [delta,setDelta]=useState(0)
    const quantity=useSelector(state=>state.quantity)
    const dispatch = useDispatch()
    const decrementQuantity=()=>{
        dispatch({type:'quantity/decrement'})
    }
    const addQuantity=(delta)=>{
        dispatch({type:'quantity/add',
        delta:delta
    })
    }
    return(
        <>
        Nicelik :{quantity}
        <button onClick={()=>dispatch({type:'quantity/increment'})}>Arttır</button>
        <button onClick={()=>decrementQuantity()}>Eksilt</button>
        <input id="delta" label="Artış Değeri" variant="outlined" value={delta} onChange={e=> setDelta(e.target.value) } /><br/>
        <button onClick={()=>addQuantity(delta)}>Ata</button>

        <Autocomplete
        options={options}
        style={{ width: 300 }}
        renderInput={(params) =>
          <TextField {...params} label="Combo box" variant="outlined" />}
      />
        </>
    )
}