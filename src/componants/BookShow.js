import { useState } from "react";
import BookEdit from "./BookEdit"

function BookShow({book, bookDelete, bookEdit}){

    const [edit, setEdit] = useState(false);

    const handelClick = ()=>{
        bookDelete(book.id)
    };
    const handelEdit = ()=>{
        setEdit(!edit);
    };
    const handelSubmit = (id, title)=>{
        setEdit(false)
        bookEdit(id, title);
    };

    let text = book.title;
    if(edit){
        text = <BookEdit book = {book} bookEdit = {bookEdit} onSubmit={handelSubmit}/>;
    }
    

    return <div className="book-show">
                <img alt="random img" src={`https://picsum.photos/seed/${book.id}/237/200/300`}/>
                <div>{text}</div>
            <div className="actions">
                <button className="delete" onClick={handelClick} ></button>
                <button className="edit" onClick={handelEdit} ></button>
            </div>
        </div>

}

export default BookShow;