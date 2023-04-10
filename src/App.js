import { useState } from "react";
import BookCreate from "./componants/BookCreate";
import BookList from "./componants/BookList";


function App(){

    const[books, setBook]  = useState([]);
    const editBookById = (id, newTitel)=>{

        const editBook = books.map((book)=>{
            if(book.id === id){
                return {...book, title : newTitel } 
            };

            return book
        });
        setBook(editBook);
    };

    const handelCreate = (title)=>{
       const update = [
        ...books,
        {id:Math.round(Math.random()*1000), title}
       ];
       setBook(update)
    };

    const deletBookByID = (id)=>{
         const upDelete = books.filter((book)=>{
            return book.id !==  id
        });

        setBook(upDelete);
    };

    return <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} bookDelete = {deletBookByID} bookEdit = {editBookById}/>
            <BookCreate onSubmit = {handelCreate}/>
           </div>
};

export default App;