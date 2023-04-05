import { useState } from "react";
import BookEdit from "./BookEdit"

function BookShow({book, bookDelete}){

    const [edit, setEdit] = useState(false);

    const handelClick = ()=>{
        bookDelete(book.id)
    };

    const handelEdit = ()=>{
        setEdit(!edit);
    };
    let text = book.title;
    if(edit){
        text = <BookEdit/>;
    }
    

    return <div className="book-show">
                <div>{text}</div>
            <div className="actions">
                <button className="delete" onClick={handelClick} ></button>
                <button className="edit" onClick={handelEdit}></button>
            </div>
        </div>

}

export default BookShow;