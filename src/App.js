import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Favourites from './components/Favourites';
import NavBar from './components/NavBar';
function Routing ()     {
    return (
        <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/cart" component = {Cart} />
            <Route path="/favourites" component = {Favourites} />
        </Switch>
    );
}

function App() {
    return (
        <Router>
            <NavBar />
            <Routing />
        </Router>
    )
}

export default App;