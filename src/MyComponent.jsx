export default function MyComponent(){
    const myValue=123;
    const getMyValue=()=>{
        return myValue;
    }
    const getMyCompute=(parameter)=>{
        return parameter*parameter;
    }
    return(
        <div>
            <h1>My Component</h1>
            degerim:{myValue}<br/>
            islevim:{getMyValue()}<br/>
            compute:{getMyCompute(9)}<br/>
        </div>
    )
}