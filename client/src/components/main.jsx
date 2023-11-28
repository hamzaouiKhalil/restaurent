import { useState } from "react";
import axios from "axios";
import Pizza from "./pizza";
import PastaList from "./pastaList";
import Pasta from "./Pasta";

const Main = (props)=>{
    const [view,setView]= useState("pasta")
    const [data, setData] = useState([])
 
    const fetchPasta = ()=>{
      axios.get("http://localhost:8080/pasta").then((response)=>{
          
        setData(response.data)
        
      })
    }
    
    return(
        
        <main>
          <button onClick={()=>{
            setView("pasta")
            fetchPasta()
        }
            }>pasta</button>
          {view === "pasta" && <PastaList data = {data} fetchPasta = {fetchPasta}/>}
        </main>
    )
}

export default Main;