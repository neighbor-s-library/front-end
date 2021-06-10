import styles from "./my_page.module.css";
import SideBarMenu from "../sidebar_menu/sidebar_menu";
import MyPageState from "../my_page_state/my_page_state";

const MyPage = () => {
    return (
        <div className={styles.myPage}>
            <SideBarMenu />
            <MyPageState />
        </div>
    )
}

export default MyPage;