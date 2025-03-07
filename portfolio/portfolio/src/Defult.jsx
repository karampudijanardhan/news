import React, { useState } from "react";

  const handleClick = () => {
    alert("Button Clicked!");
  }

   
   function Defult() {
    return ( 
        <div>
    <div className="flex flex-col items-center p-4">
      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">

        Click Me
        
      </button>
    </div>
    
    </div>
  );
}
export default Defult;