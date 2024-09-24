"use client";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="app-header header-shadow">
        <div className="app-header__logo">
          <div className="logo-src"></div>
        </div>
        <div className="app-header__mobile-menu">
          <div>
            <button
              type="button"
              className="hamburger hamburger--elastic mobile-toggle-nav"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button
              type="button"
              className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>
        <div className="app-header__content">
          <div className="app-header-left">
            <ul className="header-menu nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-link-icon fa fa-database"> </i>
                  Statistics
                </a>
              </li>
              <li className="btn-group nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-link-icon fa fa-edit"></i>
                  Projects
                </a>
              </li>
              <li className="dropdown nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-link-icon fa fa-cog"></i>
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="app-header-right">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="btn-group">
                      <a
                        onClick={toggleDropdown}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        className="p-0 btn"
                      >
                        <img
                          width="42"
                          className="rounded-circle"
                          src="assets/images/avatars/1.jpg"
                    
                        />
                        <i className="fa fa-angle-down ml-2 opacity-8"></i>
                      </a>

                        <div
                          role="menu"
                          className={`dropdown-menu dropdown-menu-right ${isOpen ? 'show' : ''}`}
                        >
                          <button type="button" className="dropdown-item">
                            User Account
                          </button>
                          <button type="button" className="dropdown-item">
                            Settings
                          </button>
                          <h6 className="dropdown-header">Header</h6>
                          <button type="button" className="dropdown-item">
                            Actions
                          </button>
                          <div className="dropdown-divider"></div>
                          <button type="button" className="dropdown-item">
                            Dividers
                          </button>
                        </div>
                      
                    </div>
                  </div>
                  <div className="widget-content-left  ml-3 header-user-info">
                    <div className="widget-heading">Alina Mclourd</div>
                    <div className="widget-subheading">VP People Manager</div>
                  </div>
                  <div className="widget-content-right header-user-info ml-3">
                    <button
                      type="button"
                      className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                    >
                      <i className="fa text-white fa-calendar pr-1 pl-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
