import React from "react";
class CompParentClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:""
        }
        console.log("parent constructor")
        this.timer = setInterval(()=>{
            console.log("parent constructor interval")
        },1000)
    }
    async componentDidMount(){
        console.log("parent component did mount")
        const res = await fetch("https://dummyjson.com/products/1")
        const json = await res.json()
        this.setState({
            data: json
        })
    }
    componentDidUpdate() {
        console.log("parent component did update")
    }
    componentWillUnmount(){
        clearInterval(this.timer) // to clean up
    }
    render(){
        console.log("parent render")
        return(
            <h1>class component Parent</h1>
        )
    }
}

export default CompParentClass;