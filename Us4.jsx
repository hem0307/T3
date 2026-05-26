import { useState } from "react";
function Us4(){
    const[sty,setSty]=useState('yellow')

    function handleClick(){
        setSty('lightblue')
    }

    return(<div>
            <button onClick={handleClick} style={{backgroundColor:'red'}}>Change Style</button><hr></hr>
            <h2 style={{backgroundColor:sty, color:'black'}}>Hello With Style</h2>
        </div>)
}
export default Us4