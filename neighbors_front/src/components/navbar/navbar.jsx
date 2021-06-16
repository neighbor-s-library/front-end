import styles from "./navbar.module.css";
import {Link, useHistory} from "react-router-dom";
import {useState, useEffect} from "react";

const Navbar = ({authService}) => {
    const history = useHistory();
    let [checkLogin,setcheckLogin] = useState(false);

    const onLogout = () => {
        authService.logout();
    }
    
    useEffect(() => {
        authService.onAuthChange((user) => {
            if(!user) {
                history.push("/login");
                setcheckLogin(false);
            } else {
                setcheckLogin(true);
            }
        })
    })
    
    return(
        <nav className={styles.navbar}>
            <div>
                <img className={styles.img} src="" />
                <Link to="/"><i className={styles.title}>Hello book</i></Link>
            </div>
            <div>
                
                {checkLogin ?
                    <ul className={styles.navbarLists}>
                        <Link to="/registration"><li className={styles.navbarButton}>책 등록 하기</li></Link>
                        <Link to="/around_library"><li className={styles.navbarButton}>내 주변 서재</li></Link>
                        <Link to="/my-page"><li className={styles.navbarButton}>My page</li></Link>
                        <button onClick={onLogout}>로그 아웃</button>
                    </ul>
                    : 
                    <ul className={styles.navbarLists}>
                    <Link to="/login"><li className={styles.navbarButton}>로그인 / 회원 가입</li></Link>
                    </ul>
                }
            </div>
        </nav>
    )
}

export default Navbar