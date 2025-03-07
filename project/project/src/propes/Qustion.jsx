import React,{useState } from "react";
const Qustion =()=> {
    const [activeIndex,setActiveIndex]=useState(null);
    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
    const Data=[
        {
            qut:"what is your name ",
            ans:"janardhan"
        },
        {
            qut:"what is your name",
            ans:"janardhan"
        },
    ]
    return (  
        <div>
            {Data.map((item,index)=>
                <div className="jana">
            <button onClick={()=>toggleAnswer(index)}
            aria-expanded={activeIndex === index}>
                {item.qut}
                <span>{activeIndex === index? '-':'+'}</span>
            </button>
            { activeIndex === index&&(
                <div>
                    {item.ans}
                </div>
            )}
            </div>
            )}
        </div>
    );
}

export default Qustion ;