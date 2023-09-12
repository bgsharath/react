import ReactDOM from "react-dom";
import HelloClass from "./HelloClass"
import CompChildClass from "./CompChildClass";
import CompParentClass from "./CompParentClass";
import Header from "./tailWindCss/Header";
import Body from "./tailWindCss/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./tailWindCss/About";

const App = () => {
    return (
        <>
            {/* <CompParentClass />
            <CompChildClass />
            <HelloClass /> */}
            <Header />
            <Outlet />
        </>
    )
}

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },
    {
        path: "/about",
        element: <About />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRoute} />)