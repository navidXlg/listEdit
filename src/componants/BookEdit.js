import { useState } from "react";

function BookEdit({book,onSubmit}){

    const[inputTitel, setInputTitel] = useState(book.title);
    const handelInput = (event)=>{
        setInputTitel(event.target.value);
    };

    const handelSubmit = (event)=>{
        event.preventdefault();
        onSubmit(book.id, inputTitel);
    };


    return(

    <form className="book-edit" onSubmit={handelSubmit}>
       <label>title</label> 
       <input className="input" value={inputTitel} onChange={handelInput}></input>
       <button className="button is-primary">Save</button>
    </form>
    )
};

export default BookEdit;