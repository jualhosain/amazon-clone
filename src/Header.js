import React from 'react';
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

const Header = () => {
    const [data, dispatch] = useStateValue();
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
                <div className="header__option">
                    <span>hello</span>
                    <span>Sign in</span>
                </div>
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
                        <span>{data.basket.length}</span>
                </div>
                    </Link>
            </div>
        </div>
    );
}

export default Header;
