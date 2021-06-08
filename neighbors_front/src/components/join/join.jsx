import {useRef} from "react";
import {Link} from "react-router-dom";
import styles from "./join.module.css";

const Join = () => {
    const emailRef = useRef();
    const password1Ref = useRef();
    const password2Ref = useRef();
    const nameRef = useRef();
    const phoneNumRef = useRef();

    //앞으로 해야될 일
    //1, 핸드폰 인증 하기 - 인증을 통해 boolean 타입으로 유효성검사 하자

    const onJoin = (event) => {
        event.preventDefault();
        if (password1Ref.current.value !== password2Ref.current.value) {
            return console.log("비밀번호가 틀렸습니다");
        }

        const join = {
            email: emailRef.current.value || "",
            password: password1Ref.current.value || "",
            name: nameRef.current.value || "",
            phoneNum: phoneNumRef.current.value || "",
        }
        console.log(join);
    }
    return(
        <div className={styles.container}>
            <form className={styles.loginForm}>
                <h2 className={styles.title}>회원 가입</h2>
                <div className={styles.inputBox}>
                <input ref={emailRef} type="text" className={styles.input} placeholder="이메일"/>
                <input ref={password1Ref} type="text" className={styles.input} placeholder="비밀번호"/>
                <input ref={password2Ref} type="text" className={styles.input} placeholder="비밀번호 확인"/>
                <input ref={nameRef} type="text" className={styles.input} placeholder="닉네임"/>
                <input ref={phoneNumRef} type="text" className={styles.input} placeholder="전화번호"/>
                <div className={styles.auth}>
                    <input type="text" className={styles.input} placeholder="인증 번호"/>
                    <button className={styles.authButton}>인증 하기</button>
                </div>
                <button className={styles.button} type="submit" onClick={onJoin}>가입 하기</button>
                <hr />
                <h4>이미 계정이 있으신가요?<Link to="/login">로그인 하기</Link></h4>
                </div>
            </form>
        </div>
    )
}

export default Join;