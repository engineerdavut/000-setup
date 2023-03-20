import ParentComponent from "./ParentComponent"
export default function GrandParentComponent(){

    return(
        <div>
            <h1>GrandParend Component</h1>
            <ParentComponent/>
        </div>
    )
}