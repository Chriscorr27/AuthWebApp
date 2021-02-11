import React, { Component } from 'react'
import {connect} from 'react-redux'
import { buycake } from '../redux'
class CakeComponent extends Component {
    render() {
        return (
            <div>
                <h1>Number of cake - {this.props.noOfCakes} </h1>
                <button className="btn btn-success m-5" onClick={this.state.buycake}>Buy Cake</button>
            </div>
        )
    }
}

const mapStateToprops = (state)=>{
    return{
        noOfCakes : state.noOfCake
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        buycake : ()=>{dispatch(buycake)}
    }
}
export default connect(
mapStateToprops,
mapDispatchToProps)
(CakeComponent)

