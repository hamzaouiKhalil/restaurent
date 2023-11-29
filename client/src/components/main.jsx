import { useState } from "react";
import axios from "axios";
import PastaList from "./pastaList";


const Main = (props) => {
  const [view, setView] = useState("pasta")
  
  const [data, setData] = useState([])

  const fetchPasta = () => {
    axios.get(`http://localhost:8080/`).then((response) => {

      setData(response.data)

    })
  }
  const fetchPizza = () => {
    axios.get("http://localhost:8080/pizza").then((response) => {

      setData(response.data)

    })
  }
  const fetchTacos = () => {
    axios.get("http://localhost:8080/sandwich").then((response) => {

      setData(response.data)

    })
  }
  const fetchPlat = () => {
    axios.get("http://localhost:8080/plat").then((response) => {

      setData(response.data)

    })
  }
  return (

    <main>
      <button onClick={() => {
        setView("pasta")
        fetchPasta()
      }
      }>pasta</button>
      <button className="foodDisplay" onClick={() => {
        setView("pizza")
        fetchPizza()
      }
      }>Pizza</button>
            <button  className="foodDisplay" onClick={() => {
        setView("sandwich")
        fetchTacos()
      }
      }>Sandwich</button>
      <button  className="foodDisplay" onClick={() => {
        setView("plat")
        fetchPlat()
      }
      }>plat</button>
      {view === "pasta" && <PastaList data={data} fetchPasta={fetchPasta} />}
      {view === "pizza" && <PastaList data={data} fetchPasta={fetchPizza} />}
      {view === "sandwich" && <PastaList data={data} fetchPasta={fetchTacos} />}
      {view === "plat" && <PastaList data={data} fetchPasta={fetchPlat} />}
    </main>
  )
}

export default Main;