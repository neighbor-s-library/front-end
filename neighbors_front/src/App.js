import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MainPage from "./components/main_page/main_page";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
