import { useEffect, useState } from "react";
import axios from "axios"
import EventList from "./components/eventComponents/eventList";

const Event = () => {
    const [name, setName] = useState("")
    const [event, setEvent] = useState("")
    const [data,setData] = useState([])
    console.log(data)
    function fetch(){
        axios.get("http://localhost:8080/event").then((response)=>setData(response.data))
    }
    function addEvent(){
        axios.post("http://localhost:8080/event",{name,content: event}).then(()=>fetch())
    }
    useEffect(()=>{
        fetch()
    },[])
    return (
        <div>
            <input className="inputEvent" onChange={(e)=>setName(e.target.value)} placeholder="enter event name"></input>
            <input className="inputEventDesc" onChange={(e)=>setEvent(e.target.value)} placeholder="enter event description"></input>
            <button id="submitEvent" onClick={addEvent}>submit event</button>
            <EventList fetch = {fetch} data = {data}/>
        </div>
    )
}
export default Event;