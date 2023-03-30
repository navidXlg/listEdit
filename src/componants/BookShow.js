
function BookShow({book, bookDelete}){

    const handelClick = ()=>{
        bookDelete(book.id)
    }
    

    return <div className="book-show">
                {book.title}
            <div className="actions">
                <button className="delete" onClick={handelClick} ></button>
            </div>
        </div>

}

export default BookShow;