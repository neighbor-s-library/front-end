import styles from "./navbar.module.css";
import {Link, useHistory} from "react-router-dom";
import {useState, useEffect} from "react";

const Navbar = ({ authService, user }) => {
    const [login, setLogin] = useState();
    const history = useHistory();


    useEffect(() => { 
            setLogin(user);
        // authService.onAuthChange((user) => {
        //     if(!user) {
        //         history.push("/login");
        //         setcheckLogin(false);
        //     } else {
        //         setcheckLogin(true);
        //     }
        // })
    },[user])
    
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                {/* <img className={styles.img} src="/images/logo.png" alt="Main logo" /> */}
                <Link to="/"><i className={styles.title}>Hello book</i></Link>
            </div>
            <div>
                {login ?
                    <ul className={styles.navbarLists}>
                        <Link to="/registration"><li className={styles.navbarButton}>책 등록 하기</li></Link>
                        <Link to="/my-page"><li className={styles.navbarButton}>My page</li></Link>
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