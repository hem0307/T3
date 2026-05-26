import { useState } from "react";
// import img1 from '../assets/react.svg'
// import img2 from '../assets/hero.png'
import img1 from '../assets/i-am-iron-man-avengers-endgame-final-snap-wallpaper-768x432.webp'
import img2 from '../assets/the-odyssey-epic-battle-art-wallpaper-768x432.webp'

function Task4(){

    const[pic,setPic]=useState(img1)

    function handleChange(){

        if (pic==img1){
            setPic(img2)
        }
        else{
            setPic(img1)
        }
    }

    return(<div>
        <img src={pic} height={500} width={700}/>
        <button onClick={handleChange}>Change</button>
    </div>)
}
export default Task4