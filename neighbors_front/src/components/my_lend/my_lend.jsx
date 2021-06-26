import MyLibraryForm from "../my_library_form/my_library_form";
import styles from "./my_lend.module.css";

const MyLend = ( { myLend } ) => {

    return (
        <div className={styles.myLend}>
            <h1>내가 빌린 내역</h1>
                {myLend[0]?
                myLend.map((book,index) => {
                    return <MyLibraryForm key={index} book={book} />
                })
                :
                <h3>빌린 내역이 없습니다.</h3>
            }
        </div>
    )
}

export default MyLend;