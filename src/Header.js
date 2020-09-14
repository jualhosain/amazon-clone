import React from 'react';
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import {auth} from './firebase'

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header_logo'
                    src="img/logo.png"
                    alt="amazon"
                />
            </Link>
            <div className="header_search">
                <input
                    className='header_input'
                    type="text"
                />

                <SearchIcon className='searchIcon' />
            </div>
            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header__option">
                        <span>hello {user? user.email : 'Guest'}</span>
                        <span>{user ? "Sign Out": "Sign In"}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span>Returns</span>
                    <span>Orders</span>
                </div>
                <div className="header__option">
                    <span>Your</span>
                    <span>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span>{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
