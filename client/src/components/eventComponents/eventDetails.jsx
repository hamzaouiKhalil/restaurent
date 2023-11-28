import axios from "axios";

const EventDetails = (props)=>{
    console.log(props.data)
    function deleteEvent(){
        axios.delete(`http://localhost:8080/event/${props.data._id}`).then(()=>{
            props.fetch()
        })
    }
    return(
        <div className="eventContainer">
            <h1 className="nameEvent">name: {props.data.name}</h1>
            <p className="eventContent">Content: {props.data.content}</p>
            <button className="deleteEvent" onClick={deleteEvent}>remove</button>
        </div>
    )
}
export default EventDetails;