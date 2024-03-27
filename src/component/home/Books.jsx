import { useEffect } from "react"

const Books = () => {
    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setFood(data))
    }, []);
    return(
        <div className="mt-6 mb-6">
           <h2>Books</h2>
           <div className="">
           {books.map(book => (
                    <div key={book.id} className="book-card">
                        <img src={book.image} alt={book.bookName} />
                        <div className="book-details">
                            <h3>{book.bookName}</h3>
                            <p>Author: {book.author}</p>
                            <p>Category: {book.category}</p>
                            <p>Rating: {book.rating}</p>
                            <p>Tags: {book.tags.join(', ')}</p>
                        </div>
                    </div>
                ))}
           </div>
        </div>
    )
}
export default Books;