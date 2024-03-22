import React from "react";
import { useState } from "react";

function Form() {
  const [value, setValue] = useState("you can change me");
  
  function onchangeText(event) {
    setValue(event.target.value);
  }
  
  return (
    <div>
      <form>
        <label htmlFor="Name">Name</label>
        <input type="text" onChange={onchangeText} />
      </form>
      <p>{value}</p>
    </div>
  );
}

export default Form;
