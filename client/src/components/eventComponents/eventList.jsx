import EventDetails from "./eventDetails";
 
const EventList = (props)=>{
console.log(props.data)
    return(
        <div>
            <h1>your Events</h1>
            {
                props.data.map((e,i)=>{
                    return(
                        <EventDetails data = {e} key= {i} fetch = {props.fetch}/>
                    )
                })
            }
        </div>
    )
}
export default EventList;