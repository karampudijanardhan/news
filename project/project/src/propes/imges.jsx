import { useState } from "react";
import { AcData } from "../Max/Ac";


function Image() {

    return ( 
        <div>
        {AcData.map((item)=>{
            return(
                <img src={item.image}/>
            )
        })}
        </div>
     );
}

export default Image;