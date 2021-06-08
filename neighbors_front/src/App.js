import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MainPage from "./components/main_page/main_page";
import Login from "./components/login/login";
import Join from "./components/join/join";
import MyPage from "./components/my_page/my_page";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/join">
          <Join />
        </Route>
        <Route exact path="/my-page">
          <MyPage />
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
