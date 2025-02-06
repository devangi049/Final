import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import Cookies from 'js-cookie';

function Navbar() {
  const [userName, setUserName] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      const name = localStorage.getItem('userName');
      if (name) {
        setUserName(name);
      }
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('accessToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    window.location.href = '/'; // Redirect to homepage
  };

  return (
    <div>
      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <Link to="/" className="navbar-brand d-flex align-items-center text-center">
            <div className="icon p-2 me-2">
              <img
                className="img-fluid"
                src={logo}
                alt="Icon"
                // style={{ width: '80px', height: '80px' }}
              />
            </div>
            <h1 className="m-0 text-primary">Yojna Gyan</h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/schemes" className="nav-item nav-link">
                Schemes
              </Link>
              <div className="nav-item dropdown">
                <Link to="/categories" className="nav-link">
                  Category
                </Link>
              </div>
              <div className="nav-item dropdown">
                <Link to="/faqs" className="nav-link">
                  FAQs
                </Link>
              </div>
              <Link to="/" className="nav-item nav-link">
                About
              </Link>
            </div>

            {!userName ? (
              <Link to="/login" className="btn btn-primary px-3 d-none d-lg-flex">
                Login
              </Link>
            ) : (
              <div className="nav-item dropdown">
                <span
                  className="nav-link"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {userName}
                  {isDropdownOpen && (
                    <div className="dropdown-menu show" style={{ position: 'absolute' }}>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  )}
                </span>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
