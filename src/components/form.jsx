import React from 'react'

function Form() {

    function onchangeText(event){
        console.log(event.target.value);
    }
  return (
    <div>
    <form action="" method="get">
        <label htmlFor="Name">Name</label>
        <input type="text" onChange={onchangeText} />
    </form>
    </div>
  )
}

export default Form