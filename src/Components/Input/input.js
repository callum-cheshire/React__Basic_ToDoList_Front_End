// import { useState } from "react";
const Input = ({ handleSubmit, handleChange, value }) => {
    

    

    return ( 
        <div>
            <input value={value} placeholder="Enter task..." type='text' onChange={e => handleChange(e)}></input>
            <button className="submit-button" onClick={(input) => handleSubmit(input)}>Add to list</button>
        </div>
     );
}
 
export default Input;