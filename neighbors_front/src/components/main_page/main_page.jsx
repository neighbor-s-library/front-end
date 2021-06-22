import styles from "./main_page.module.css"
import Book from "../book/book";
import Search from "../search/search";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { hydrate } from "react-dom";

const MainPage = ({ bookBackEndAPI, history }) => {
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
        <Search bookBackEndAPI={bookBackEndAPI} setAllBooks={setAllBooks}/>
        <h1>전체 책 목록</h1>
        {allBooks[0] ? 
            <div className={styles.lists}>
            {allBooks.map((book,index) => {
                return <Book key={index} book={book}/>
            })}
            </div>
            :
            <div className={styles.lists}>
                <h1>검색목록에 없습니다.</h1>
            </div>
        } 
        
        </>
    )
}

export default MainPage;