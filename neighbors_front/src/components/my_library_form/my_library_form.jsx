import styles from "./my_library_form.module.css";
import { Link } from "react-router-dom";

const MyLibraryForm = ({book}) => {
    return (
        <div className={styles.myLibraryForm}>
            <Link to={`detail/${book.id}`}><img className={styles.image} src={book.img} alt="책 사진" /></Link>
            <div className={styles.datas}>
                <h5 className={styles.headerTitle}>책 제목 
                    <button className={styles.changeDetail} onClick={() => {}}>수정하기</button>
                </h5>
                <h3 className={styles.data}>{book.title}</h3>
                <h5 className={styles.headerTitle}>등록한 사람</h5>
                <h3 className={styles.data}>{book.nickname}</h3>
                <h5 className={styles.headerTitle}>출판사</h5>
                <h3 className={styles.data}>{book.pub}</h3>
                <div className={styles.description}>{book.detail}</div>
            </div>
        </div>
    )
}

export default MyLibraryForm;