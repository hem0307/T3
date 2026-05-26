import { useState } from "react";

function Task3(){

    const[name,setname]=useState('LJ University')
    const[txtcolor,settxtcolor]=useState('yellow')
    const[hideTxt,sethideTxt]=useState('ReactJsHooks')
    const[btntxt,setbtnTxt]=useState('Hide')


    function showhide(){
        if(btntxt=='Hide'){
            setbtnTxt('Show')
            sethideTxt('')
        }
        else{
            setbtnTxt('Hide')
            sethideTxt('ReactJsHooks')
        }
    }

    function changeName(){
        if (name=='LJ University'){
            setname("Welcome Student")
        }
        else{
            setname('LJ University')
        }
    }

     function changeColor(){
        if (txtcolor=='yellow'){
            settxtcolor('blue')
        }
        else{
            settxtcolor('yellow')
        }
     }
    
    return(<div>
        <button onClick={changeName}>Change Txt</button><br/>
        <button onDoubleClick={changeColor}>Change Color</button><br/>
        <button onClick={showhide}>{btntxt}</button><br/>
        <h1 style={{color:txtcolor}}>{name}</h1>
        <h2>{hideTxt}</h2>
    </div>)

}
export default Task3