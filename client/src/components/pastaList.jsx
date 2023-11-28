import { useEffect, useState } from "react";
import Pasta from "./Pasta";
import axios from "axios"

const FoodList = (props)=>{
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [url,setUrl] = useState("")
    const [category,setCategory] = useState("")
   function submit(){
    axios.post("http://localhost:8080/",{foodName: name,price,category,image: url}).then(()=>{
        props.fetchPasta()
    })
   }

    return(
        <div>
            <p>add Food</p>
            <input placeholder="category" onChange={(e)=>setCategory(e.target.value)}></input>
            <input placeholder="name" onChange={(e)=>setName(e.target.value)}></input>
            <input placeholder="price" onChange={(e)=>setPrice(e.target.value)}></input>
            <input placeholder="image"  onChange={(e)=>setUrl(e.target.value)}></input>
            <button onClick={submit}>submit</button>
            <div className="containerFood">
         {
            props.data?.map((e,i)=>{
                return(
                <Pasta data = {e} key= {i} fetchPasta = {props.fetchPasta}/>)
            })
         }
         </div>
        </div>
    )
}
export default FoodList;