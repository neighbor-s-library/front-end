import styles from "./my_library_form.module.css";

const MyLibraryForm = ({book}) => {
    console.log(book);
    return (
        <div className={styles.myLibraryForm}>
            <img className={styles.image} src={book.img} alt="책 사진" />
            <div className={styles.datas}>
                <h3 className={styles.data}>{book.title}</h3>
                <h3 className={styles.data}>{book.author}</h3>
                <h3 className={styles.data}>{book.publishing}</h3>
                <div className={styles.description}>{book.description}</div>
            </div>
        </div>
    )
}

export default MyLibraryForm;