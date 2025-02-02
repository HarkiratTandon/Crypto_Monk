import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import {CoinContext} from '../../context/CoinContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (event) => {
        switch (event.target.value) {
            case 'usd': {
                setCurrency({ name: 'usd', symbol: '$' });
                break;
            }
            case 'eur': {
                setCurrency({ name: 'eur', symbol: '€' });
                break;
            }
            case 'inr': {
                setCurrency({ name: 'inr', symbol: '₹' });
                break;
            }
            default: {
                setCurrency({ name: 'usd', symbol: '$' });
                break;
            }
        } 
    };
    
  return (
    <nav className='navbar'>
      <Link to={'/#'}>
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>CryptoMonk</span>
        </div>
      </Link>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
        </div>
    </nav>
  )
}
