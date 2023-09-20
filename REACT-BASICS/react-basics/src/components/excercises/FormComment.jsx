import { useState, useEffect } from 'react'

function FormComment() {

const [ comment, setComment] = useState('')
 


function handleSubmit(e){

e.preventDefault()
  console.log("submitted")

}

function showComment(e){
  setComment(e.target.value)
}


useEffect(() =>{

  console.log(comment)
}, [comment])

  return (
<>
    <p>{comment}</p>
    <form onSubmit={handleSubmit}>
      <fieldset>
         
    <textarea value={comment} onChange={showComment}/>
         <button type='submit'>submit</button>
        </fieldset>
     </form>
    </>
  )
}

export default FormComment

