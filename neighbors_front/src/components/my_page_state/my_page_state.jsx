import styles from "./my_page_state.module.css";
import Book from "../book/book";

const MyPageState = ({ myLibrary }) => {

    return (
        <div className={styles.state}>
            <h1>전체 보기</h1>
            <h2>내 서재</h2>
            <div className={styles.myBooks}>
                {myLibrary.map((book,index) => {
                    return <Book key={index} book={book}></Book>
                })}
            </div>
            <hr className={styles.middleLine}/>
            <h2>대여한 책</h2>
            <div className={styles.myBooks}>
                {myLibrary.map((book,index) => {
                    return <Book key={index} book={book}></Book>
                })}
            </div>
        </div>
    )
}

export default MyPageState;