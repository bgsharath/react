import ReactDOM from "react-dom";
import HelloClass from "./HelloClass"
import CompChildClass from "./CompChildClass";
import CompParentClass from "./CompParentClass";

const App = () => {
    return (
        <>            
            <CompParentClass />
            <CompChildClass />
            <HelloClass />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)