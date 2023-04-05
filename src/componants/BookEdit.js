import { useState } from "react";

function BookEdit(){

    const[inputTitel, setInputTitel] = useState("");
    const handelInput = (event)=>{
        setInputTitel(event.target.value);
    };
    const handelSubmit = ()=>{
        
    }


    return<form className="book-edit" onSubmit={handelSubmit}>
       <label>title</label> 
       <input className="input" onChange={handelInput}></input>
       <button className="button is-primary">Save</button>
    </form>
};

export default BookEdit;