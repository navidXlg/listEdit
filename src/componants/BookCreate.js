import { useState } from "react";

function BookCreate({onSubmit}){

    const[input, setInput] = useState("");

    const handelSub = (event)=>{
        setInput(event.target.value);
    };

    const handelForm = (event)=>{
        event.preventDefault();
        onSubmit(input);
        setInput("")
    }

    return (
        <div className="book-create">
        <form onSubmit={handelForm}>
            <label>Titel</label>
            <input className="input" onChange={handelSub} value ={input}></input>
            <button className="button">Click Here!</button>
        </form>
        </div>

    )
};

export default BookCreate;