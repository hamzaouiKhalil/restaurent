import axios from "axios";
import { useState } from "react";

const EventDetails = (props)=>{
    const [input, setInput] = useState("")
    console.log(props.data)
    function deleteEvent(){
        axios.delete(`http://localhost:8080/event/${props.data._id}`).then(()=>{
            props.fetch()
        })
    }
    function updateEvent(){
        axios.put(`http://localhost:8080/event/${props.data._id}`,{name: input}).then(()=>{
            props.fetch()
        })
    }
    return(
        <div className="eventContainer">
            <h1 className="nameEvent">name: {props.data.name}</h1>
            <p className="eventContent">Content: {props.data.content}</p>
            <button className="deleteEvent" onClick={deleteEvent}>remove</button>
             <input type="text" placeholder="change event name " onChange={(e)=>setInput(e.target.value)} />
             <button className="changeNameEvent" onClick={updateEvent}>change Event</button>
        </div>
    )
}
export default EventDetails;