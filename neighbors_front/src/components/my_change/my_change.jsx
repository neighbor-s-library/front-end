import styles from "./my_change.module.css";
import { useRef } from "react";

const MyChange = ({ userBackEndAPI, user }) => {
  const addressRef = useRef();
  const nicknameRef = useRef();
  const pwRef = useRef();
  const telRef = useRef();

  const onUserChange = (event) => {
    event.preventDefault();
    const userChangeData = {
      address : addressRef.current.value,
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
      console.log(response)
    })
  }

  return (
    <div className={styles.myChange}>
      <h1>개인정보 수정</h1>
      <form className={styles.form}>
        <input ref={addressRef} className={styles.input} type="text" ></input>
        <input ref={nicknameRef} className={styles.input} type="text" ></input>
        <input ref={pwRef} className={styles.input} type="text" ></input>
        <input ref={telRef} className={styles.input} type="text" ></input>
        <button onClick={onUserChange}> 변경하기 </button>
      </form>
      
    </div>
  )
}

export default MyChange;