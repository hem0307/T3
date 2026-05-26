import { useState } from "react";

function Us5(){

    const[btnTxt,setbtnTxt]=useState('show')
    const[txt,setTxt]=useState('')

    function handleClick(){
        if(btnTxt=='show'){
            setbtnTxt('Hide')
            setTxt('hello')
        }
        else{
            setbtnTxt('show')
            setTxt('')
        }
    }

    return(<div>
        <button onClick={handleClick}>{btnTxt}</button><br/>
        <h1>{txt}</h1>
    </div>)

}
export default Us5