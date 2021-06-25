import styles from "./my_change.module.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

const MyChange = ({ userBackEndAPI, user }) => {
  const history = useHistory();
  const addressRef = useRef();
  const nicknameRef = useRef();
  const pwRef = useRef();
  const telRef = useRef();

  const onUserChange = (event) => {
    event.preventDefault();
    const userChangeData = {
      id: user,
      address: addressRef.current.value,
      nickname: nicknameRef.current.value,
      pw: pwRef.current.value,
      tel: telRef.current.value
    }

    const config = {
      headers : {
        Token : window.localStorage.getItem(user)
      }
    }
    
    userBackEndAPI.change(config, userChangeData)
    .then((response) => {
      alert("회원정보 수정 성공");
      history.push("/my-page");
    }).catch((error) => {
      console.log(error)
      return alert("회원정보 수정 실패")
    })
  }

  return (
    <div className={styles.myChange}>
      <h1>개인정보 수정</h1>
      <form className={styles.form}>
        <input ref={nicknameRef} className={styles.input} type="text" placeholder="닉네임" ></input>
        <input ref={pwRef} className={styles.input} type="password" placeholder="패스워드"></input>
        <input ref={addressRef} className={styles.input} type="text" placeholder="주소" ></input>
        <input ref={telRef} className={styles.input} type="number" placeholder="전화번호"></input>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onUserChange}> 변경하기 </button>
        </div>
      </form>
      
    </div>
  )
}

export default MyChange;