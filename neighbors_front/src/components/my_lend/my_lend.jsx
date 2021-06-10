import MyLibraryForm from "../my_library_form/my_library_form";
import {useState} from "react";
import styles from "./my_lend.module.css";

const MyLend = () => {
    const [myData, setMyData] = useState([
        {
            "id" : "1",
            "title" : "나미야 잡화점",
            "author" : "김영일",
            "publishing" : "출판사",
            "image" : "/images/book.png",
            "description" : "블라블라"
        },
        {
          "id" : "2"  ,
          "title" : "나미야 잡화점",
            "author" : "김영일",
            "publishing" : "출판사",
            "image" : "/images/book.png",
            "description" : "블라블라"
        },
        {
          "id" : "3" , 
          "title" : "나미야 잡화점",
            "author" : "김영일",
            "publishing" : "출판사",
            "image" : "/images/book.png",
            "description" : "블라블라"
        },
    ]);

    return (
        <div className={styles.myLend}>
            <h1>내가 빌려준 내역</h1>
            {myData.map((book,index) => {
                return <MyLibraryForm key={index} book={book} />
            })}
        </div>
    )
}

export default MyLend;