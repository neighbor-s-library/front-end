import styles from "./user_state.module.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";


const UserState = ({ authService, userBackEndAPI , user ,setUser }) => {
  const history = useHistory();

  const onLogout = () => {
    history.push("/login");
    window.localStorage.clear();
    authService.logout();
    setUser(null);
  }

  const [userDetail, setUserDetail] = useState({});

    const loadUserDetail = () => {
        const config = {
            headers : {
                Token: window.localStorage.getItem(user)
            }
        }
        
        userBackEndAPI.userDetail(user, config)
        .then((response) => {
              const userData = response.data.item;
              setUserDetail(userData);
        }).catch((error) => {
          console.log(error);
        })
    }

    useEffect(() => {
      loadUserDetail();
    },[])

  return (
    <div className={styles.userState}>
      <div></div>
      <div className={styles.user}>
      <h5 className={styles.nickname}>{userDetail.nickname} 님</h5>
      <button onClick={onLogout}>로그 아웃</button>
      </div>
    </div>
  )
}

export default UserState;