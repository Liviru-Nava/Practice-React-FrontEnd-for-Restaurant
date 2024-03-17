import React, {useRef} from 'react'
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

    const menuRef = useRef();
    const menuToggle = () => menuRef.current.classList.toggle('active_menu')
    return (
        <header className="header">
            <Container>
                <div className="navigation">
                    <div className="logo">
                         <h2 className='d-flex align-items-center gap-1' id='h2'>
                            <span><i class="ri-restaurant-2-line"></i></span>Chef Food
                         </h2>
                    </div>
                    <div className="nav_menu" ref={menuRef}>
                        <div className="nav_list_wrapper d-flex align-items-center justify-content-center">
                            <ul className="nav_list">
                            {
                                navLinks.map((item, index)=>(<li className="nav_item" key={index} onClick={menuToggle}>
                                <a href={item.url}>{item.display}</a>
                                </li>) )
                            }
                            </ul>
                            <div className="menu_right">
                                <div className="custom_search">
                                    <input type="text" name="search" id="search" placeholder="search items..."/>
                                    <span><i class="ri-search-line"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="cart_icon">
                        <i class="ri-shopping-cart-fill"></i>
                        <span className="badge">
                            2
                        </span>
                        </span>
                    </div>
                    <div className="mobile_menu">
                        <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;