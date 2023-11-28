import { useState } from "react";
import axios from "axios"

const Pasta = (props)=>{
 const [price, setPrice] = useState(0)

function update (){
    axios.put("http://localhost:8080/",{_id: props.data._id,price:price}).then(()=>{
    props.fetchPasta()
    })
}
function remove(){
    axios.delete(`http://localhost:8080/${props.data._id}`).then(()=>{
        props.fetchPasta()
        })
}
    return(
        <div className="changeInput" >
            <h3>{props.data.foodName}</h3>
            <img src={props.data.image} className="image"></img>
            <p>{props.data.price} $</p>
            <input  type="text" placeholder="change price" onChange={(e)=>setPrice(e.target.value)} />
            <button className="update" onClick={update}>update</button>
            <button className="delete"  onClick={remove}>delete</button>
        </div>
    )
}
export default Pasta;