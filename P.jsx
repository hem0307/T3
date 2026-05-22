import P1 from './P1'
import img1 from './assets/download.jpg'
import img2 from './assets/react.svg'

function P(){
    const prod1=[{pic:img1,name:'Product1',Price:'₹30,000'},{pic:img2,name:'Product2',Price:'₹35,000'}]
    return(
        <div>
            <P1 info={prod1}/>
        </div>
    )
}
export default P