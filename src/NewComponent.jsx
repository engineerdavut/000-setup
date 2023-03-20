import { useState } from "react"
export const NewComponent=()=>{
    const isValid=()=>{
        return true;
    }
    const save=()=>{
        if(!isValid()){
            alert('Geçersiz');
            return;
        }
        
    }
    const [errors,setErrors]=useState(10);
    return(
        <ul>
            {Object.keys(errors).map(key=>
                <li key={key}>{errors[key]
                ?
                errors[key]
                :
                ''}
                </li>
            )}
        </ul>
    )

}
