import React from "react";
class HelloClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        console.log("HelloClass constructor")
    }
    async componentDidMount(){
        console.log("HelloClass component did mount")
        const res = await fetch("https://dummyjson.com/products/1")
        const json = await res.json()
        this.setState({
            data: json
        })
    }
    componentDidUpdate() {
        console.log("HelloClass component did update")
    }
    render() {
        console.log("HelloClass render")
        return (
            <h1>class component HelloClass</h1>
        )
    }
}

export default HelloClass;