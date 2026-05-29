import { useReducer } from "react";
function UR(){
    const[state,dispatch]=useReducer(reducer,0)
    function reducer(state,action){
        if(action.type=='increment'){
            return state+1
        }
    }
    return(<button onClick={()=>dispatch({type:'increment'})}>Click{state}</button>)
}
export default UR