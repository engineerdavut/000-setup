
export default function GeneratorComponent({company,department}){
    const generateContent=(input)=>{
        return(
            <div>
                Burası kuşaldı.<strong><em>{input}</em></strong>
            </div>
        )
    }

    
    return(
        <div>
            Burası bileşen<br/>
            {generateContent('Generator')}
            {company}<br/>
            {department}<br/>

        </div>
    )

}
