import {Link} from "react-router-dom";
import styles from "./book.module.css";

const Book = ({book, id}) => {
    return (
        <Link to={`/detail/${id}`}>
            <div className={styles.book}>
                <img className={styles.image} src={book.image} />
                <h3 className={styles.title}>{book.title}</h3>
            </div>
        </Link>
    )
}

export default Book;