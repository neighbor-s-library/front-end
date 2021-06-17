import styles from "./login.module.css"
import {useRef, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

const Login = ({ authService , backEndAPI}) => {
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();

    const goToMainPage = (userId) => {
        history.push({
            pathname: "/",
            state: {
                id: userId 
            }
        });
    }

    const onLogin = (event) => {
        const login = {
            email: emailRef.current.value || "",
            pw: passwordRef.current.value || ""
        }
        event.preventDefault();

        backEndAPI.login(login).then((response) => {
            console.log(response);
        })
    }

    const onGoogleLogin = () => {
        authService
        .login("Google")
        .then((data) => {
            console.log(data.user.uid);
            goToMainPage(data.user.uid);
        });
    }

    useEffect(() => {
        authService
        .onAuthChange((user) => {
            user && goToMainPage(user.uid);
        })
    })
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.title}>로그인</h2>
                <div className={styles.inputBox}>
                <h2 className={styles.google} onClick={onGoogleLogin}>구글로 로그인 하기</h2>
                <hr />
                <input ref={emailRef} type="text" className={styles.input} placeholder="이메일"/>
                <input ref={passwordRef} type="text" className={styles.input} placeholder="비밀번호"/>
                <button className={styles.button} type="submit" onClick={onLogin}>로그인 하기</button>
                <h4>아직 계정이 없으신가요?<Link className={styles.link} to="/join"> 가입하기</Link></h4>
                <hr />
                <h4>혹시 비밀번호를 잊으셨나요?</h4>
                </div>
            </form>
        </div>
    )
}

export default Login;
