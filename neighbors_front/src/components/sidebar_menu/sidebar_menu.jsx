import styles from "./sidebar_menu.module.css"

const SideBarMenu = () => {
    return (
        <div className={styles.menu}>
            <img className={styles.avatar} src="/images/book.png" alt="avatar" />
            <div className={styles.userDatas} >
                <h5 className={styles.data}>김영일</h5>
                <h5 className={styles.data}>등록한 책 00권 (00권 대여중)</h5>
                <h5 className={styles.data}>대여한 책 00권</h5>
                <h5 className={styles.data}>포인트 40000pt</h5>
            </div>
            <ul className={styles.tabs}>
                <li className={styles.tab}>내 서재 관리</li>
                <li className={styles.tab}>내가 빌려준 내역</li>
                <li className={styles.tab}>내가 빌린 내역</li>
                <li className={styles.tab}>개인정보 수정</li>
            </ul>
        </div>
    )
}

export default SideBarMenu;