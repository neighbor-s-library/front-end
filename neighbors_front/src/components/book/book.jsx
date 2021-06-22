import {Link} from "react-router-dom";
import styles from "./book.module.css";

const Book = ({book}) => {
    return (
        <Link className={styles.link} to={`/detail/${book.id}`}>
            <div className={styles.book}>
                <img className={styles.image} src={book.img} alt="책사진" />
                <li className={styles.title}>{book.title}</li>
                <li >{book.created_at}</li>
            </div>
        </Link>
    )
}

export default Book;