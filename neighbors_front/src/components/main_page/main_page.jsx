import styles from "./main_page.module.css"
import Book from "../book/book";
import Search from "../search/search";
import { useState, useEffect } from "react";

const MainPage = ({data, bookBackEndAPI}) => {
    const [allBooks,setAllBooks] = useState([]);
    const [pageCount,setPageCount] = useState(1);

    const viewBooks = () =>{
        bookBackEndAPI.allLoadBooks(pageCount)
        .then((response) => {
        const items = response.data.item;
        setAllBooks(items);
    })
    }
    
    useEffect(() => {
        viewBooks()
    },[]);

    return(
        <>
        <Search />
        <h1>전체 책 목록</h1>
        <div className={styles.lists}>
            {allBooks.map((book,index) => {
                return <Book key={index} book={book}/>
            })}
        </div>
        </>
    )
}

export default MainPage;