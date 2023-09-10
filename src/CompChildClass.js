import React from "react";
class CompChildClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        console.log("child constructor")
    }
    async componentDidMount(){
        console.log("child component did mount")
        const res = await fetch("https://dummyjson.com/products/1")
        const json = await res.json()
        this.setState({
            data: json
        })
    }
    componentDidUpdate() {
        console.log("child component did update")
    }
    render() {
        console.log("child render")
        return (
            <h1>class component Child</h1>
        )
    }
}

export default CompChildClass;