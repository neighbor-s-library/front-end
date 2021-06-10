import styles from "./my_library_form.module.css";

const MyLibraryForm = ({book}) => {
    return (
        <div className={styles.myLibraryForm}>
            <img className={styles.image} src={book.image} alt="책 사진" />
            <div className={styles.datas}>
                <h5 className={styles.data}>{book.title}</h5>
                <h5 className={styles.data}>{book.author}</h5>
                <h5 className={styles.data}>{book.publishing}</h5>
                <div className={styles.description}>{book.description}</div>
            </div>
        </div>
    )
}

export default MyLibraryForm;