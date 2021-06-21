import './App.module.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MainPage from "./components/main_page/main_page";
import Login from "./components/login/login";
import Join from "./components/join/join";
import MyPage from "./components/my_page/my_page";
import Detail from "./components/detail/detail";
import Registration from "./components/registration/registration";
import AroundLibrary from "./components/around_library/around_library";
import { useState } from 'react';

function App({ authService, imageUploader, userBackEndAPI, bookBackEndAPI }) {
  const [userData, setUserData] = useState({});

  return (
    <Router>
      <Navbar authService={authService}/>
      <Switch>
        <Route exact path="/">
          <MainPage bookBackEndAPI={bookBackEndAPI}/>
        </Route>
        <Route exact path="/login">
          <Login authService={authService} userBackEndAPI={userBackEndAPI} setUserData={setUserData}/>
        </Route>
        <Route exact path="/join">
          <Join userBackEndAPI={userBackEndAPI}/>
        </Route>
        <Route exact path="/my-page">
          <MyPage />
        </Route>
        <Route exact path="/detail/:id" render={(props) => <Detail {...props} bookBackEndAPI={bookBackEndAPI}/>} />
        <Route exact path="/registration">
          <Registration imageUploader={imageUploader} bookBackEndAPI={bookBackEndAPI} userData={userData} />
        </Route>
        <Route>
          <AroundLibrary />
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
