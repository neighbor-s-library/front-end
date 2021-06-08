import styles from "./navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    const login = true;
    return(
        <navbar className={styles.navbar}>
            <div>
                <img className={styles.img} src="" />
                <Link to="/"><i className={styles.title}>이웃집 도서관</i></Link>
            </div>
            <div>
                {login ?
                    <ul className={styles.navbarLists}>
                        <Link to="/login">
                            <li className={styles.navbarButton}>로그인 / 회원 가입</li>
                        </Link>
                    </ul>
                    : 
                    <ul className={styles.navbarLists}>
                        <li className={styles.navbarButton}>내 주변 서재</li>
                        <li className={styles.navbarButton}>My page</li>
                    </ul>
                }
            </div>
        
        </navbar>
    )
}

export default Navbar