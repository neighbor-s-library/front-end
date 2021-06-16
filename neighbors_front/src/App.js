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

function App({ authService }) {
  const data = [
    {
      "id" : "1",
      "title" : "나미야 잡화점",
      "author" : "김영일",
      "publishing" : "출판사",
      "image" : "/images/book.png"
  },
  {
    "id" : "2"  ,
    "title" : "나미야 잡화점",
      "author" : "김영일",
      "publishing" : "출판사",
      "image" : "/images/book.png"
  },
  {
    "id" : "3" , 
    "title" : "나미야 잡화점",
      "author" : "김영일",
      "publishing" : "출판사",
      "image" : "/images/book.png"
  },
  {
    "id" : "4"  ,
    "title" : "나미야 잡화점",
      "author" : "김영일",
      "publishing" : "출판사",
      "image" : "/images/book.png"
  },
  {
    "id" : "5"  ,
    "title" : "나미야 잡화점",
      "author" : "김영일",
      "publishing" : "출판사",
      "image" : "/images/book.png"
  },
  {
    "id" : "6" , 
    "title" : "나미야 잡화점",
      "author" : "김영일",
      "publishing" : "출판사",
      "image" : "/images/book.png"
  },
  {
    "id" : "7" , 
    "title" : "나미야 잡화점",
      "author" : "김영일",
      "publishing" : "출판사",
      "image" : "/images/book.png"
  },
  {
    "id" : "8"  ,
    "title" : "나미야 잡화점",
      "author" : "김영일",
      "publishing" : "출판사",
      "image" : "/images/book.png"
  },
  {
    "id" : "9",  
    "title" : "나미야 잡화점",
      "author" : "김영일",
      "publishing" : "출판사",
      "image" : "/images/book.png"
  },
  ]

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MainPage data={data} />
        </Route>
        <Route exact path="/login">
          <Login authService={authService}/>
        </Route>
        <Route exact path="/join">
          <Join />
        </Route>
        <Route exact path="/my-page">
          <MyPage />
        </Route>
        <Route exact path="/detail/:id" render={(props) => <Detail {...props} />} />
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route>
          <AroundLibrary />
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
