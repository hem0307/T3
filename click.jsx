function Click()
{
    function handleSubmit()
    {
        alert("Double Clicked")
    }
    const myStyle={color:"aqua",
        backgroundcolor:"black",
        padding:"10px 20px",
        margin:"200px"}
    return(<>
    <center>
        {/* <button style={myStyle} onClick={handleSubmit}>Click</button> */}
        <button style={myStyle} onDoubleClick={handleSubmit}>Click</button>
    </center>
    </>)
}
export default Click
 