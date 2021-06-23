import MyLibraryForm from "../my_library_form/my_library_form";
import {useState} from "react";
import styles from "./my_library.module.css";

const MyLibrary = ( {setLibrary, myLibrary} ) => {
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