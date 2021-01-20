import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";
import USAStock from './components/USAStock/USAStock';
import About from "./components/About/About";
import IndianStock from "./components/IndianStock/IndianStock";

import ChatBox from "./components/ChatBox/ChatBox";


const App = () => {
  return (
    <Router>

      <Navigation />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/usa-stock">
          <USAStock />
        </Route>
        <Route exact path="/india-stock">
          <IndianStock />
        </Route>
        <Route exact path="/about-us">
          <About />
        </Route>
      </Switch>

      <Footer />
      <ChatBox />

    </Router>

  );
}

export default App;
