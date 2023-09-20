import { useState, useEffect } from "react";
const Form = () => { 
 const [value, setValue] = useState(""); 

 const handleChange = (e) => { 
   setValue(e.target.value) 
 }

useEffect(()=>{


   console.log(value)

}, [value])


console.log("hello")
 return ( 
   <form> 
     <input    
       value={value} 
       onChange={handleChange} 
       type="text" 
     /> 
   </form> 
 ); 
};

export default Form;

