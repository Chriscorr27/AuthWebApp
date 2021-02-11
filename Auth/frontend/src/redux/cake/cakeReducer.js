import { BUY_CAKE } from "./cakeType"

const intialState ={
    noOfCake : 25
}

const cakeReducer=(state=intialState,action)=>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            noOfCake : state.noOfCake-1
        }
        default : return state
    }
}

export default cakeReduce