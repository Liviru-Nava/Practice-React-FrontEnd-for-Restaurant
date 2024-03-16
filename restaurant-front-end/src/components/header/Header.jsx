import React from 'react'
import "./Header.css"
import { Container } from "reactstrap";
const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Menu',
        url: '#'
    },
    {
        display: 'Recipe',
        url: '#'
    },
    {
        display: 'Contact',
        url: '#'
    }
]
const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="navigation">
                    <div className="logo">
                         <h2 className='d-flex align-items-center gap-1' id='h2'>
                            <span><i class="ri-restaurant-2-line"></i></span>Chef Food
                         </h2>
                    </div>
                    <div className="nav_menu">
                        <ul className="nav_list">
                            {
                                navLinks.map((item, index)=>(<li className="nav_item" key={index}>
                                <a href={item.url}>{item.display}</a>
                            </li>) )
                            }
                        </ul>
                    </div>

                    <div className="menu_right">
                        <div className="custom_search">
                            <input type="text" name="search" id="search" placeholder="search items..."/>
                            <span><i class="ri-search-line"></i></span>
                        </div>
                    </div>

                    <div className="mobile_menu">
                        <span><i class="ri-menu-line"></i></span>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;