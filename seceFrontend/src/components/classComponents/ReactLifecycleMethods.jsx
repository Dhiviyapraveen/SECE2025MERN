import React from "react";
class ReactLifecycleMethods extends React.Component{
    constructor(){
        super()
        console.log("constructor")
        this.state={
            number:0
        }
    }
    updateNum=()=>{
        this.setState({number:this.state.number+1})
    }
    componentDidMount(){
        console.log("Mounting comp")
        this.setState({number:this.state.number+1})
        console.log("Component Mounded");
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.number!==this.state.number){
            console.log("Update Comp",prevState.number,this.state.number)
        }
        setInterval(()=>{
            console.log("Updated")
        },5000)
       }
    componentWillUnmount(){
        console.log("component Unmounted")
        this.setState({number:10000})

       }

render(){
    console.log("Inside Render")
    return(
        <div>
            {console.log("Inside Return")}
            <h1>This is React Lifecycle Methods</h1>
            <h2>The state value is {this.state.number}</h2>
            <button onClick={this.updateNum}>+</button>
        </div>
    )
}
}
export default ReactLifecycleMethods