export default function ConditionComponent(){
    const value=13;
    return(    
        value<5 ?
        <div>
            <h1>value 5  den kucuk</h1>
        </div>
        :
        <div>
            <h6>value 5 e esit veya buyuk</h6>
            {
               value>12 &&
               <h6>value 12 den buyuk</h6>
            }
        </div>    
    )
    /*
    const value=8;
    if(value<5){
        return(
            <div>
                <h1>value 5  den kucuk</h1>               
            </div>
        )
    }else{
        return(
            <div>
                <h1>value 5 e esit veya buyuk</h1>               
            </div>
        )
    }
    */
}