import { useState } from "react";
import img1 from '../assets/react.svg'
import img2 from '../assets/hero.png'
import img3 from '../assets/i-am-iron-man-avengers-endgame-final-snap-wallpaper-768x432.webp'
import img4 from '../assets/the-odyssey-epic-battle-art-wallpaper-768x432.webp'
import img5 from '../assets/download.jpg'

function Us6(){
    const arr=[img1,img2,img3,img4,img5]
    const[myimage,setimage]=useState(arr[0])

    function  handleChange(){
        const randomIndex=Math.floor(Math.random()*arr.length)
        setimage(arr[randomIndex])
    }

    return(<div>
        <img src={myimage} height={500} width={750}/>
        <button onClick={handleChange}>Change img</button>
    </div>)
}
export default Us6
