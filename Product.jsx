function Product(props){
    return(
        <div>
            {
                props.info.map((p)=>
                {
                    return(<div>
                        <img src={p.pic} alt="image" height={200} width={200}/>
                        <h1>{p.name}</h1>
                        <h1>{p.price}</h1>
                    </div>)
                })
            }
        </div>
    )
}
export default Product