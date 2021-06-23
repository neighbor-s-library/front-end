import MyLibraryForm from "../my_library_form/my_library_form";
import {useState} from "react";
import styles from "./my_library.module.css";

const MyLibrary = ( {setLibrary, myLibrary} ) => {
    // const [myData, setMyData] = useState([
    //     {
    //         "id" : "1",
    //         "title" : "나미야 잡화점",
    //         "author" : "김영일",
    //         "publishing" : "출판사",
    //         "image" : "/images/book.png",
    //         "description" : "블라블라"
    //     },
    //     {
    //       "id" : "2"  ,
    //       "title" : "나미야 잡화점",
    //         "author" : "김영일",
    //         "publishing" : "출판사",
    //         "image" : "/images/book.png",
    //         "description" : "블라블라"
    //     },
    //     {
    //       "id" : "3" , 
    //       "title" : "나미야 잡화점",
    //         "author" : "김영일",
    //         "publishing" : "출판사",
    //         "image" : "/images/book.png",
    //         "description" : "블라블라"
    //     },
    // ]);

    return (
        <div className={styles.myLibrary}>
            <h1>내 서재 관리</h1>
            {myLibrary.map((book,index) => {
                return <MyLibraryForm key={index} book={book} />
            })}
        </div>
    )
}

export default MyLibrary;