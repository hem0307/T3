function Map1(){
    const arr=[1,2,3,4]
    return(
    <div>
        {
            arr.map((value)=>{
                return<h2> Array Element={value}</h2>
            })
        }
    </div>)
}
export default Map1