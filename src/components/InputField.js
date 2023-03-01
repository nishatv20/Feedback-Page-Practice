import React from 'react'

function InputField() {
  return (
    <form> <textarea id='review' name ="review" rows ="6" cols="80">Post your Review </textarea>
    <button className='button'>Submit</button>
</form>
      
  )
}

export default InputField