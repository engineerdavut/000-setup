export default function MapComponent(){
    const names=['html','css','javascript','ajax','json'];
    return(
        <ul>
        <h6>Mapp</h6>
        {
            names.map((name,index)=>(
                <div key={index}>{name}</div>
            ))
        }
        {
            names.map(name=>
                <li key={name} style={{textAlign:'left',fontWeight:'bold'}}> 
                    {name}<br/>
                </li>
            )
        }
        </ul>
    )
}