import './App.css';
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import BusinessNews from './components/BusinessNews';
import BitcoinNews from './components/BitcoinNews'
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import BITCOIN from "./data/businessSeed";
import BUSINESS from "./data/bitcoinSeed";
import Data from "./services/data";


function App() {
  // console.log(BITCOIN);
  // console.log(BUSINESS);
  console.log(Data());
  return ( 
    <Router>
<div className="App">
      <nav>
            <NavLink exact to="/">
                  
              Home
            </NavLink>
            <NavLink to="/BitcoinNews">
              BitcoinNews
            </NavLink>
            <NavLink to="/BusinessNews">
              BusinessNews
            </NavLink>
      </nav>  
      <main>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/BitcoinNews"}>
            <BitcoinNews 
              newslist = {BITCOIN}
            />
          </Route>
          <Route path={ "/BusinessNews"}>
            <BusinessNews
              businesslist = {BUSINESS}
            />
          </Route>
          {/* can pass props */}
          {/* <Route path="posts/:post_id">
            <Post />
          </Route> */}
          {/* cant pass props. everthing is thats not include this is what * */}
          <Route path={"*"} component={NoMatch} />
        </Switch>
      </main>
    </div>
    </Router>
  );
}

export default App;