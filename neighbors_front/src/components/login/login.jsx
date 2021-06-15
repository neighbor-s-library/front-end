import styles from "./login.module.css"
import {useRef} from "react";
import {Link} from "react-router-dom";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    //해야할 일
    //REST API 메소드 POST를 통해 login 객채 서버로 request 하기

    const onLogin = (event) => {
        const login = {
            email: emailRef.current.value || "",
            password: passwordRef.current.value || ""
        }
        event.preventDefault();
        console.log(login);
    }

    function onSignIn(googleUser) {
        // var profile = googleUser.getBasicProfile();
        console.log(googleUser);
        // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.title}>로그인</h2>
                <div className={styles.inputBox}>
                <div class="g-signin2" data-onsuccess="onSignIn" onClick={onSignIn}>asd</div>
                <h2 className={styles.google} onClick={() => {console.log("무야호")}}>구글로 로그인 하기</h2>
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