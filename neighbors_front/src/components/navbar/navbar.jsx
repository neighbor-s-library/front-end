import styles from "./navbar.module.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const Navbar = () => {
    let [login, setLogin] = useState(false);

    //테스트용 함수 
    const changeState = () => {
        if(!login) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    return(
        <nav className={styles.navbar}>
            <div>
                <img className={styles.img} src="" />
                <Link to="/"><i className={styles.title}>이웃집 도서관</i></Link>
            </div>
            <div>
                
                {login ?
                    <ul className={styles.navbarLists}>
                        <li onClick={changeState}>로그아웃 테스트</li>
                        <Link to="/registration"><li className={styles.navbarButton}>책 등록 하기</li></Link>
                        <Link to="/around_library"><li className={styles.navbarButton}>내 주변 서재</li></Link>
                        <Link to="/my-page"><li className={styles.navbarButton}>My page</li></Link>
                    </ul>
                    : 
                    <ul className={styles.navbarLists}>
                        <li onClick={changeState}>로그인 테스트</li>
                    <Link to="/login"><li className={styles.navbarButton}>로그인 / 회원 가입</li></Link>
                    </ul>
                }
            </div>
        </nav>
    )
}

export default Navbar