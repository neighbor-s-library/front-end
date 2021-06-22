import { useState } from "react";
import styles from "./my_page.module.css";
import SideBarMenu from "../sidebar_menu/sidebar_menu";
import MyPageState from "../my_page_state/my_page_state";
import MyLibrary from "../my_library/my_library";
import MyRent from "../my_rent/my_rent";
import Mylend from "../my_lend/my_lend";

const MyPage = ({bookBackEndAPI, user}) => {
    const [myState, setMyState] = useState(1);

    return (
        <div className={styles.myPage}>
            <SideBarMenu set={setMyState}/>
            {myState === 1 ? <MyPageState bookBackEndAPI={bookBackEndAPI} user={user}/> : null}
            {myState === 2 ? <MyLibrary /> : null}
            {myState === 3 ? <MyRent /> : null}
            {myState === 4 ? <Mylend /> : null}
        </div>
    )
}

export default MyPage;