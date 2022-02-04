import 'bootstrap/dist/css/bootstrap.min.css';
import Archive from '../pages/Archive';
import Header from './Header';
import Footer from './Footer';
import About from "../pages/About";
import {Switch, Route} from "react-router-dom";
import Characters from '../pages/Characters';
import CharDetail from '../pages/CharDetail';
import Home from '../pages/Home';
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
        
        <Switch key={location.pathname} location={location}>
        <Route exact path="/">
           {/*<Redirect to="/pages/0/1" />*/}
           <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/pages/:chapter/:page">
            <Archive key=""/>
        </Route>
        <Route exact path="/characters">
            <Characters/>
        </Route>
        <Route path="/characters/:character">
            <CharDetail />
        </Route>
        </Switch>
        
        <Footer />
      
    </div>
  );
}

export default App;
