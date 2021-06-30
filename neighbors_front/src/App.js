import './App.module.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MainPage from "./components/main_page/main_page";
import Login from "./components/login/login";
import Join from "./components/join/join";
import MyPage from "./components/my_page/my_page";
import Detail from "./components/detail/detail";
import Registration from "./components/registration/registration";
import UserState from "./components/user_state/user_state";
import BookChange from "./components/book_change/book_change";
import { useState, useEffect } from 'react';


function App({ authService, imageUploader, userBackEndAPI, bookBackEndAPI }) {
  const [user, setUser] = useState(window.localStorage.getItem("id"));
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
      if(user) {
        loadUserDetail();
      }
    },[])

  return (
    <Router>
      {user? <UserState authService={authService} setUser={setUser} user={user} userDetail={userDetail} userBackEndAPI={userBackEndAPI}/> : null}
      <Navbar authService={authService} user={user} />
      <Switch>
        <Route exact path="/">
          <MainPage bookBackEndAPI={bookBackEndAPI} />
        </Route>
        <Route exact path="/login">
          <Login authService={authService} userBackEndAPI={userBackEndAPI} setUser={setUser} loadUserDetail={loadUserDetail} />
        </Route>
        <Route exact path="/join">
          <Join userBackEndAPI={userBackEndAPI}/>
        </Route>
        <Route exact path="/my-page">
          <MyPage bookBackEndAPI={bookBackEndAPI} user={user} userBackEndAPI={userBackEndAPI}/>
        </Route>
        <Route exact path="/detail/:id" render={(props) => <Detail {...props} bookBackEndAPI={bookBackEndAPI}/>} />
        <Route exact path="/registration">
          <Registration imageUploader={imageUploader} bookBackEndAPI={bookBackEndAPI} user={user}/>
        </Route>
        <Route exact path="/book-change/:id" render={(props) => <BookChange {...props} bookBackEndAPI={bookBackEndAPI} imageUploader={imageUploader} user={user}/>} />
      </Switch>
    </Router>    
  );
}

export default App;
