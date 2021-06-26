import styles from "./sidebar_menu.module.css";

const SideBarMenu = ({set, myLibrary, userDetails }) => {
    const onSubmit = (event) => {
        const flag = event.target.value;
        set(flag);
    }

    return (
        <div className={styles.menu}>
            <img className={styles.avatar} src="/images/book.png" alt="avatar" />
            <div className={styles.userDatas} >
                <h5 className={styles.data}>{userDetails.nickname}</h5>
                <h5 className={styles.data}>등록한 책 {myLibrary.length}권 (00권 대여중)</h5>
                <h5 className={styles.data}>대여한 책 00권</h5>
                <h5 className={styles.data}>포인트 :{userDetails.point}pt </h5>
            </div>
            <ul className={styles.tabs}>
                <li className={styles.tab} onClick={onSubmit} value="1">전체 보기</li>
                <li className={styles.tab} onClick={onSubmit} value="2">내 서재 관리</li>
                <li className={styles.tab} onClick={onSubmit} value="3">내가 빌려준 내역</li>
                <li className={styles.tab} onClick={onSubmit} value="4">내가 빌린 내역</li>
                <li className={styles.tab} onClick={onSubmit} value="5">개인정보 수정</li>
            </ul>
        </div>
    )
}

export default SideBarMenu;
