import styles from "./book.module.css";

const Book = ({book}) => {
    return (
        <div className={styles.book}>
            <img className={styles.image} src={book.image} />
            <h3 className={styles.title}>{book.title}</h3>
        </div>
    )
}

export default Book;