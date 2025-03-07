import { useState,useEffect } from "react";
const Usestate = () => {
    const [city,setcity]=useState("nellore")
    useEffect(()=>{
        if (city=="nellore"){
            setcity("bangulur")
        }
        else{
            setcity("nedhurupalli")
        }
    },[])
    return ( 
        <div>use state {city}</div>
     );
}
 
export default Usestate;