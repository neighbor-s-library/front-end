import { useState, useEffect } from "react";
import styles from "./my_page.module.css";
import SideBarMenu from "../sidebar_menu/sidebar_menu";
import MyPageState from "../my_page_state/my_page_state";
import MyLibrary from "../my_library/my_library";
import MyRent from "../my_rent/my_rent";
import Mylend from "../my_lend/my_lend";
import MyChange from "../my_change/my_change";

const MyPage = ({ userBackEndAPI, bookBackEndAPI, user }) => {
    const [myState, setMyState] = useState(1);
    const [myLibrary, setMyLibrary] = useState([]);
    const [myRent, setMyRent] = useState([]);
    const [myLend, setMylend] = useState([]);

    const searchUserBooks = () => {
        bookBackEndAPI.searchUserBooks(user)
        .then((response) => {
            const books = response.data.item;
            console.log(books)
            setMyLibrary(books);
        })
    }


    useEffect(() => {
        searchUserBooks();
    },[])

    return (
        <div className={styles.myPage}>
            <SideBarMenu set={setMyState} user={user} userBackEndAPI={userBackEndAPI} myLibrary={myLibrary}/>
            {myState === 1 ? <MyPageState bookBackEndAPI={bookBackEndAPI} user={user} myLibrary={myLibrary}/> : null}
            {myState === 2 ? <MyLibrary bookBackEndAPI={bookBackEndAPI} myLibrary={myLibrary}/> : null}
            {myState === 3 ? <MyRent bookBackEndAPI={bookBackEndAPI} /> : null}
            {myState === 4 ? <Mylend bookBackEndAPI={bookBackEndAPI} /> : null}
            {myState === 5 ? <MyChange userBackEndAPI={userBackEndAPI} user={user}/> : null}
        </div>
    )
}

export default MyPage;