import {useState, useEffect} from "react";
import styles from "./my_page_state.module.css";
import Book from "../book/book";

const MyPageState = ({bookBackEndAPI, user}) => {
    const [myData, setMyData] = useState([]);

    const searchUserBooks = () => {
        console.log(user)
        bookBackEndAPI.searchUserBooks(user)
        .then((response) => {
            const books = response.data.item;
            setMyData(books);
        })
    }

    useEffect(() => {
        searchUserBooks();
    },[])

    return (
        <div className={styles.state}>
            <h1>전체 보기</h1>
            <h2>내 서재</h2>
            <div className={styles.myBooks}>
                {myData.map((book,index) => {
                    return <Book key={index} book={book}></Book>
                })}
            </div>
            <hr className={styles.middleLine}/>
            <h2>대여한 책</h2>
            <div className={styles.myBooks}>
                {myData.map((book,index) => {
                    return <Book key={index} book={book}></Book>
                })}
            </div>
        </div>
    )
}

export default MyPageState;