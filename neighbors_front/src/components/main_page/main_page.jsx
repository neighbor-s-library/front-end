import styles from "./main_page.module.css"
import Book from "../book/book";
import Search from "../search/search";
import { useState, useEffect } from "react";

const MainPage = ({ bookBackEndAPI }) => {
    const [allBooks,setAllBooks] = useState([]);
    let [pageCount,setPageCount] = useState(1);

    const viewBooks = () => {
        bookBackEndAPI.allLoadBooks(pageCount)
        .then((response) => {
        const items = response.data.item;
        setAllBooks(items);
        }).catch((error) => {
            console.log(error);
        })
    }

    const plusBooks = (plusCount) => {
        bookBackEndAPI.allLoadBooks(plusCount)
        .then((response) => {
        const items = response.data.item;
        setAllBooks([...allBooks, ...items]);
        }).catch((error) => {
            console.log(error);
        })
    }

    const onPlusView = () => {
        if(pageCount !== 3) {
            setPageCount(pageCount++);
            plusBooks(pageCount);
        }
    }
    
    useEffect(() => {
        viewBooks()
    },[]);

    return(
        <>
        <Search bookBackEndAPI={bookBackEndAPI} setAllBooks={setAllBooks}/>
        <div className={styles.mainPageTitle}>
            <h1>전체 책 목록</h1>
            <button className={styles.button} onClick={onPlusView}>더 보기</button>
        </div>
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