import { useState, useEffect } from 'react'

function FormEx() {

 const [value , setValue] = useState("")
function handleChange(e){

  setValue(e.target.value)
}


function handleSubmit(){
  console.log("submitted")
}


useEffect(() =>{

  console.log(value)
}, [value])

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           name:
          <input id= "name" name = "name" autoComplete = "true"
          value ={value}
          onChange={handleChange}

           />
         </label>
         <button type='submit'>submit</button>
        </fieldset>
     </form>
  )
}

export default FormEx

