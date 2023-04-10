import BookShow from "./BookShow";

function BookList({books, bookDelete, bookEdit}){

    const comp = books.map((book)=>{

        return <BookShow key={book.id} book = {book} bookDelete = {bookDelete} bookEdit = {bookEdit}/>;
    });

    return<div className="book-list">{comp}</div>

}


export default BookList;