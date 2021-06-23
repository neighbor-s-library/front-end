import {useRef} from "react";
import {Link, useHistory} from "react-router-dom";
import styles from "./join.module.css";


const Join = ({ userBackEndAPI }) => {
    const history = useHistory();
    const emailRef = useRef();
    const password1Ref = useRef();
    const password2Ref = useRef();
    const nicknameRef = useRef();
    const telRef = useRef();
    const addressRef = useRef();
    //앞으로 해야될 일
    //1, 핸드폰 인증 하기 - 인증을 통해 boolean 타입으로 유효성검사 하자

    const onJoin = (event) => {
        event.preventDefault();
        if (password1Ref.current.value !== password2Ref.current.value) {
            return console.log("비밀번호가 틀렸습니다");
        }
        const join = {
            email: emailRef.current.value || "",
            address: addressRef.current.value || "",
            nickname: nicknameRef.current.value || "",
            pw: password1Ref.current.value || "",
            tel: telRef.current.value || "",
        }
        
        userBackEndAPI.join(join)
        .then((response) => {
            if(response === "error") {
                return alert("회원정보를 정확하게 넣어주세요");
            }
            history.push("/login");
        })
    }

    return(
        <div className={styles.container}>
            <form className={styles.loginForm}>
                <h2 className={styles.title}>회원 가입</h2>
                <div className={styles.inputBox}>
                <input ref={emailRef} type="text" className={styles.input} placeholder="이메일"/>
                <input ref={password1Ref} type="text" className={styles.input} placeholder="비밀번호"/>
                <input ref={password2Ref} type="text" className={styles.input} placeholder="비밀번호 확인"/>
                <input ref={nicknameRef} type="text" className={styles.input} placeholder="닉네임"/>
                <input ref={addressRef} type="text" className={styles.input} placeholder="주소"/>
                <input ref={telRef} type="text" className={styles.input} placeholder="전화번호"/>
                <div className={styles.auth}>
                    <input type="text" className={styles.input} placeholder="인증 번호"/>
                    <button className={styles.authButton}>인증 하기</button>
                </div>
                <button className={styles.button} type="submit" onClick={onJoin}>가입 하기</button>
                <hr />
                <h4>이미 계정이 있으신가요?<Link className={styles.link} to="/login"> 로그인 하기</Link></h4>
                </div>
            </form>
        </div>
    )
}

export default Join;