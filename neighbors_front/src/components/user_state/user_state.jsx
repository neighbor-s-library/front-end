import styles from "./user_state.module.css";
import { useHistory } from "react-router-dom";

const UserState = ({ authService ,setUser, nickname}) => {
  const history = useHistory();
  const onLogout = () => {
    history.push("/login");
    window.localStorage.clear();
    setUser(null);
    // authService.logout();
  }

  return (
    <div className={styles.userState}>
      <div></div>
      <div className={styles.user}>
      <h5 className={styles.nickname}>{nickname} 님</h5>
      <button onClick={onLogout}>로그 아웃</button>
      </div>
    </div>
  )
}

export default UserState;