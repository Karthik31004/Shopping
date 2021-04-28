import React , { useState } from 'react';
import { BiHeart , BiCart } from 'react-icons/bi';
import './NavBar.css';
import { Link } from 'react-router-dom';
import store from '../redux/store.js';

function NavBar() {
    const [mark, setMark] = useState("");
    function highLight() {
        var name = store.getState().activeTab;
        setMark(name)
    }
    return(
        <div className = "navbar">
            <Link 
                to="/" 
                className="nav-logo link"
                onClick = { () => {
                        store.dispatch({
                            type: "TAB_CHANGE",
                            tab: "Home"
                        })
                        highLight();
                    }
                 }
            >
                <h2> Shopping App </h2>
            </Link>
            <div className="nav-items">
                <Link 
                    to ="/favourites" 
                    className = {mark === "Favourites" ? "nav-item link high" : "nav-item link"}
                    onClick={() => {
                        store.dispatch({
                            type: "TAB_CHANGE",
                            tab: "Favourites"
                        })
                        highLight();
                    }
                    }
                >
                    <BiHeart size="30" />
                    <h3>Favourites</h3>
                </Link>
                <Link 
                    to = "/cart" 
                    className = {mark === "My Cart" ? "nav-item link high" : "nav-item link"}
                    onClick={() => {
                        store.dispatch({
                            type: "TAB_CHANGE",
                            tab: "My Cart"
                        })
                        highLight();
                    }
                    }
                >
                    <BiCart size="30" />
                    <h3>My Cart</h3>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;