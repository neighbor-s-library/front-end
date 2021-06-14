import {Link} from "react-router-dom";
import styles from "./book.module.css";

const Book = ({book, id}) => {
    return (
        <Link className={styles.link} to={`/detail/${id}`}>
            <div className={styles.book}>
                <img className={styles.image} src={book.image} />
                <li className={styles.title}>{book.title}</li>
                <li > 대여 가능 기간 : 12일</li>
            </div>
        </Link>
    )
}

export default Book;