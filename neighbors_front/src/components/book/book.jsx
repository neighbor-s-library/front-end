import styles from "./book.module.css";

const Book = ({book}) => {
    return (
        <div className={styles.book}>
            <img className={styles.image} src={book.image} />
            <p className={styles.title}>{book.title}</p>
        </div>
    )
}

export default Book;