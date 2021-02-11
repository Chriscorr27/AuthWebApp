import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             is_Authenticated : true
        }
       this.clickFunction=this.clickFunction.bind(this)
    }
    
    clickFunction(){
        
        this.setState({
            is_Authenticated:!this.state.is_Authenticated
        })
    }
    render() {
    
        return (
            this.state.is_Authenticated?(
                <div>
                <h1 className="mt-5 mb-5 font-italic" >Hello Chris </h1>
                    <button className="btn btn-outline-warning" onClick={this.clickFunction}>Logout</button>
                </div>
            ):(
                <div>
                <h1 className="mt-5 mb-5 font-italic">Hello Guest </h1>
                    <button className="btn btn-outline-success" onClick={this.clickFunction}>Login</button>
                </div>  
            )
        )
    }
}

export default UserGreeting

