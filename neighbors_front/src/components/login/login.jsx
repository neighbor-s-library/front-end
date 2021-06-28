import styles from "./login.module.css"
import {useRef, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

const Login = ({ authService , userBackEndAPI, setUser ,loadUserDetail }) => {
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

        userBackEndAPI.login(login).then((response) => {
            const user = response.data;
            window.localStorage.setItem(user.id,user.token);
            window.localStorage.setItem("id",user.id);
            goToMainPage(user.id);
            setUser(user.id);
            loadUserDetail();
        }).catch((error) => {
            console.log(error);
            return alert("회원정보가 일치하지 않습니다.");
        })
    }

    const onGoogleLogin = () => {
        authService
        .login("Google")
        .then((data) => {
            const userProfile = data.additionalUserInfo.profile;
            const join = {
                email: userProfile.email,
                address: "주소 없음",
                pw: data.user.uid,
                nickname: userProfile.name,
                tel: "00000000000",
            }
            const login = {
                email: userProfile.email,
                pw: data.user.uid
            }

            // 백엔드 이메일로 유저 조회하기.
                userBackEndAPI.userEmailDetail(userProfile.email)
                .then((response) => {
                    
                    userBackEndAPI.login(login)
                    .then((response) => {
                        const user = response.data;
                        window.localStorage.setItem(user.id,user.token);
                        window.localStorage.setItem("id", user.id);
                        goToMainPage(user.id);
                        setUser(user.id);
                        loadUserDetail();
                    })
                }).catch((error) => {
                    userBackEndAPI.join(join)
                    .catch((error) => {
                        return alert("이미 존재하는 이메일이거나 회원 정보가 바르게 입력되지 않았습니다.")
                    })

                    userBackEndAPI.login(login)
                    .then((response) => {
                        const user = response.data;
                        window.localStorage.setItem(user.id,user.token);
                        window.localStorage.setItem("id",user.id);
                        goToMainPage(user.id);
                        setUser(user.id);
                        loadUserDetail();
                    })
                    .catch((error) => {
                        return console.log(error);
                    })
                })
        });
    }

    // useEffect(() => {
    //     authService
    //     .onAuthChange((user) => {
    //         user && goToMainPage(user.uid);
    //     })
    // })
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.title}>로그인</h2>
                <div className={styles.inputBox}>
                <h2 className={styles.google} onClick={onGoogleLogin}>구글로 로그인 하기</h2>
                <hr />
                <input ref={emailRef} type="email " className={styles.input} placeholder="이메일"/>
                <input ref={passwordRef} type="password" className={styles.input} placeholder="비밀번호"/>
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
