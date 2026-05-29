import { useReducer } from "react";
function UR1(){
    const[state,dispatch]=useReducer(reducer,20)
    function reducer(state,action){
        return state+action
    }
    return(<div>
        <h1 style={{color:'red'}}>{state}</h1>
        <button onClick={()=>dispatch(2.5)}> Add </button>
    </div>)
}
export default UR1