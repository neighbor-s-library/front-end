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
import { useState, useEffect } from 'react';


function App({ authService, imageUploader, userBackEndAPI, bookBackEndAPI }) {
  const [user, setUser] = useState(window.localStorage.getItem("id"));
  const [nickname,setNickname] = useState("");

  // const renderUserdata = () => {
  //   setNickname(nickname);
  // }

  // useEffect(() => {
  //   renderUserdata();
  // })

  return (
    <Router>
      {user? <UserState authService={authService} setUser={setUser} nickname={nickname}/> : null}
      <Navbar authService={authService} user={user} />
      <Switch>
        <Route exact path="/">
          <MainPage bookBackEndAPI={bookBackEndAPI} />
        </Route>
        <Route exact path="/login">
          <Login authService={authService} userBackEndAPI={userBackEndAPI} setUser={setUser} setNickname={setNickname}/>
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
      </Switch>
    </Router>    
  );
}

export default App;
