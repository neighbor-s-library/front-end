import styles from "./sidebar_menu.module.css"
import { useState, useEffect } from "react";

const SideBarMenu = ({set, user, userBackEndAPI}) => {
    const [userDetail, setUserDetail] = useState({});

    const loadUserDetail = () => {
        const config = {
            headers : {
                Token: window.localStorage.getItem(user)
            }
        }
        userBackEndAPI.userDetail(user, config)
        .then((response) => {
            const userData = response.data.item
            setUserDetail(userData);
        })
    }

    console.log(userDetail)
    const onSubmit = (event) => {
        const flag = event.target.value;
        set(flag);
    }

    useEffect(() => {
        loadUserDetail();
    },[])

    return (
        <div className={styles.menu}>
            <img className={styles.avatar} src="/images/book.png" alt="avatar" />
            <div className={styles.userDatas} >
                <h5 className={styles.data}>{userDetail.nickname}</h5>
                <h5 className={styles.data}>등록한 책 00권 (00권 대여중)</h5>
                <h5 className={styles.data}>대여한 책 00권</h5>
                <h5 className={styles.data}>포인트 :{userDetail.point}pt </h5>
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
