import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const cart = useSelector((state)=>state.cart);
    const {cartItems} = cart
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="/navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand mt-2 mt-lg-0" href="/">
                        <img
                            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                            height="15"
                            alt=""
                            loading="lazy"
                        />
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Projects</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center">
                    <Link className="text-reset me-3" to="/cart">
                        {
                            cartItems.length > 0 &&(
                                <s>
                                <i className="fas fa-shopping-cart"></i><span className="badge rounded-pill badge-notification bg-danger">{cartItems.length}</span></s>
                            )
                        }
                        
                    </Link>
                    <a
                        className="text-reset me-3 dropdown-toggle hidden-arrow"
                        href="/"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fas fa-bell"></i>
                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                    </a>
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                    >
                        <li>
                            <a className="dropdown-item" href="/">Some news</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/">Another news</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/">Something else here</a>
                        </li>
                    </ul>
                    <a
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="/"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                            className="rounded-circle"
                            height="25"
                            alt=""
                            loading="lazy"
                        />
                    </a>
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                    >
                        <li>
                            <a className="dropdown-item" href="/">My profile</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/">Settings</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
