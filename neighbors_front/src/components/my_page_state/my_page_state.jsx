import {useState} from "react";
import styles from "./my_page_state.module.css";
import Book from "../book/book";

const MyPageState = () => {
    const [myData, setMyData] = useState([
        {
            "id" : "1",
            "title" : "나미야 잡화점",
            "author" : "김영일",
            "publishing" : "출판사",
            "image" : "/images/book.png"
        },
        {
          "id" : "2"  ,
          "title" : "나미야 잡화점",
            "author" : "김영일",
            "publishing" : "출판사",
            "image" : "/images/book.png"
        },
        {
          "id" : "3" , 
          "title" : "나미야 잡화점",
            "author" : "김영일",
            "publishing" : "출판사",
            "image" : "/images/book.png"
        },
    ]);

    return (
        <div className={styles.state}>
            <h1>내 서재</h1>
            <div className={styles.myBooks}>
                {myData.map((book,index) => {
                    return <Book key={index} book={book}></Book>
                })}
            </div>
            <hr className={styles.middleLine}/>
            <h1>대여한 책</h1>
            <div className={styles.myBooks}>
                {myData.map((book,index) => {
                    return <Book key={index} book={book}></Book>
                })}
            </div>
        </div>
    )
}

export default MyPageState;