import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Switch, Route, Redirect, useLocation} from "react-router-dom";
import Archive from '../pages/Archive';
import Header from './Header';
import Footer from './Footer';
import About from "../pages/About";
import Characters from '../pages/Characters';
import CharDetail from '../pages/CharDetail';
import Home from '../pages/Home';
import Pages from '../pages/Pages';
import Gallery from '../pages/Gallery';
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
        <Route exact path="/pages">
            <Pages />
        </Route>
        <Route exact path="/pages/:chapter/:page?" render={props => <Archive key={props.match.params.chapter + props.match.params.page || 'empty'} /> } />

        <Route exact path="/characters">
            <Characters />
        </Route>
        <Route path="/characters/:character" render={props => <CharDetail key={props.match.params.character || 'empty'} /> } />
        <Route exact path="/gallery">
            <Redirect to="/gallery/fanart" />
        </Route>
        <Route path="/gallery/:galleryCategory" render={props => <Gallery key={props.match.params.galleryCategory || 'empty'} /> } />
        </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
