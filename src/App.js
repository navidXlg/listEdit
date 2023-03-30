import { useState } from "react";
import BookCreate from "./componants/BookCreate";
import BookList from "./componants/BookList";
function App(){

    const[books, setBook]  = useState([]);
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
            <BookList books={books} bookDelete = {deletBookByID}/>
            <BookCreate onSubmit = {handelCreate}/>
           </div>
};

export default App;