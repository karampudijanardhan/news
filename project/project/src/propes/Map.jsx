const lokesh=[{
    name:"koushik",
    age:20,
    college:"svcet",
    village:"bangaruplayam",
    markes:600
}]


const Map = () => {
    return ( 
        <div>
            {lokesh.map((items)=>{
           return(
            <div>
                <h1>{items.name} </h1>
                <h1>{items.age} </h1>
                <h1>{items.college} </h1>
                <h1>{items.village} </h1>
                <h1>{items.markes} </h1>
            </div>
           )
            })}
        </div>
     );
}
 
export default Map;