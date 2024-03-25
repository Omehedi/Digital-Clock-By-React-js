import React,{useState, useEffect} from "react";


function DigitalClock(){

    const [time, setTime] = useState(new Date());



    useEffect(()=>{
        const intervalid = setInterval(()=>{
            setTime(new Date())
        },1000)

        return ()=>{
            clearInterval(intervalid)
        }
    },[]);


    function formatTime(){
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";



        const formattedHours = hours < 10 ? `O${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `O${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `O${seconds}` : seconds;

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${meridiem}`

    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>

        </div>
    )
}
export default DigitalClock;