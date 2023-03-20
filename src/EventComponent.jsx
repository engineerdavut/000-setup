export default function EventComponent(){
    const handle=()=>{
        alert('kotarılıyor.');
    }
    const deal=(input)=>{
        alert('uğraşılıyor. '+ input);
    }
    const manage=(event)=>{
        alert('işletiliyor. '+ event.target.id +'  ' +event.target.tagName);
    }
    return(
        <div>
            <h6>Biçim</h6>
            <button onClick={()=>alert('işleniyor.')}>Çizgi İçi</button>
            <br/>
            <button onClick={handle}>Ok</button>
            <br/>
            <button onClick={()=>deal('girdi')}>Değiştirgen</button>
            <br/>
            <button id='manager' onClick={(event)=>manage(event)}>Olay</button>
        </div>
    )
}