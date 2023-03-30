
import BookShow from "./BookShow";

function BookList({books, bookDelete}){

    const comp = books.map((book)=>{

        return <BookShow key={book.id} book = {book} bookDelete = {bookDelete}/>;
    });

    return<div className="book-list">{comp}</div>

}


export default BookList;