import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/' >Pelazio.com</Link>
                <button className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='active' exact to='/' >Home</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='active' to='/products'>Products</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link p-1 me-3" activeClassName='active' to="/cart">
                                <span className="badge rounded-pill bg-primary me-1">0</span>
                                <i className="bi bi-basket-fill fs-4"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Header;