
import { useEffect, useState } from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navigation = () =>{

    const [isNavOpen , setNavOpen ] = useState(false);


    const navToggle = () =>{
            setNavOpen( prevState => !prevState);
    }

    useEffect( ()=>{

        const getWindowSize = ()=> {
            if(window.innerWidth > 999){
                setNavOpen(false);
            }
        }
        window.addEventListener('resize', getWindowSize);
        getWindowSize();
        return () => window.removeEventListener('resize', getWindowSize);

    },[])




    return (
        
        <nav className="nav">

            <div className="nav__menu-btn" onClick={navToggle}>
                  <i className="ri-menu-line"></i>
            </div>

            <h1 className="nav__logo">
                <Link className="nav__link nav__link--logo" to="/">TOP STOCKS</Link>
            </h1>
            
            <div className={ isNavOpen ? 'nav__phone nav__phone--open' : 'nav__phone'}>

                <div className="nav__close-btn" onClick={navToggle}>
                       <i className="ri-close-line"></i>
                </div>

                <ul className="nav__list">
                    <li className="nav__items">
                        <NavLink activeClassName ="nav__link--active" className="nav__link" to="/">Home</NavLink>
                    </li>
                    <li className="nav__items">
                        <NavLink activeClassName ="nav__link--active" className="nav__link" to="/usa-stock">USA Stocks</NavLink>
                    </li>
                    <li className="nav__items">
                        <NavLink  activeClassName ="nav__link--active" className="nav__link" to="/india-stock">India Stocks</NavLink>
                    </li>
                    <li className="nav__items">
                        <NavLink activeClassName ="nav__link--active" className="nav__link" to="/about-us">About Us</NavLink>
                    </li>
                </ul>

            </div>

        </nav>

    )
}

export default Navigation;