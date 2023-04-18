import { useState, useEffect } from "react";
import BookCreate from "./componants/BookCreate";
import BookList from "./componants/BookList";
import { useContext } from "react";
import bookcontext, {Provider} from "./context/book"
import axios from "axios";


function App(){

    const[books, setBook]  = useState([]);

    // const initialFetch = async ()=>{
    //     const response = axios.get("http://localhost:3001/Book");
    //     setBook(response.data);
    // };
    // useEffect(()=>{
    //     initialFetch();
    // }, []);



    const editBookById = async (id, newTitel)=>{

        const updateBook = await axios.put(`http://localhost:3001/book/${id}`,
        {
            title : newTitel
        });
        const editBook = books.map((book)=>{
            if(book.id === id){
                return {...book, title : newTitel } 
            };

            return book
        });
        setBook(editBook);
    };

    // const handelCreate = (title)=>{
    //    const update = [
    //     ...books,
    //     {id:Math.round(Math.random()*1000), title}
    //    ];
    //    setBook(update)
    // };

    const handelCreate = async(title) =>{
        const response  = await axios.post("https://localhost:3001", {
            title
        });

        const updateed = [
            ...books,
            response
        ];
        setBook(updateed);
    };

    const deletBookByID = (id)=>{
         const upDelete = books.filter((book)=>{
            return book.id !==  id
        });

        setBook(upDelete);
    };

    const {count,  incriseCount} = useContext(bookcontext);

    return <div className="app">
            <h1>Reading List{count}</h1>
            <button onClick={incriseCount}>click</button>
            <BookList books={books} bookDelete = {deletBookByID} bookEdit = {editBookById}/>
            <BookCreate onSubmit = {handelCreate}/>
           </div>
};

export default App;