import React from 'react'
import '../component/Header.css'
import headerlogo from '../component/header-logo.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import { useStateValue } from './StateProvider';


const Header = () => {
    const [{basket,user}]=useStateValue();
    return (
        <div className='header'>

            {/* <div className='container-fluid nav bg '>
                <div className='row'>
                    <div className='col-12 mx-auto'>


                    </div>
                </div>
            </div> */}

            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid mx-4">
                    
                    <NavLink class="navbar-brand" to="">
                    <img src={headerlogo} alt=''/>
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <ExpandMoreIcon/>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   
                    <ul class="navbar-nav   me-auto  mb-2 mb-lg-0"></ul>
                        <form class="d-flex header__search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <ul class="navbar-nav menu-list  mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li> 
                            <li class="nav-item">
                                <NavLink  class="nav-link" aria-current="page" to="/blog">Blog</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" aria-current="page" to="/checkout" >Checkout(<strong style={{color:"red"}}>{basket.length}</strong>)</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" aria-current="page" to="/about">About us</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" aria-current="page" to="/contact">Contact us</NavLink>
                            </li>
                            <li class="nav-item">
                                <Avatar src={user?.photoURL} alt={user?.displayName}></Avatar>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header;