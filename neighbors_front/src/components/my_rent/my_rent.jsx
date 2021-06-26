import MyLibraryForm from "../my_library_form/my_library_form";
import styles from "./my_rent.module.css";

const MyRent = ({ myRent }) => {
    return (
        <div className={styles.myRent}>
            <h1>내가 빌려준 내역</h1>
            {myRent[0]?
                myRent.map((book,index) => {
                    return <MyLibraryForm key={index} book={book} />
                }) 
                :
                <h3>빌려준 내역이 존재하지 않습니다.</h3>
            }
        </div>
    )
}

export default MyRent;