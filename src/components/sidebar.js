import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/css/sidebar.css'

function Sidebar() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState('personal-information');

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    if (menuName !== 'settings') {
      setIsSubmenuOpen(false);
    }
  };

  const handleSubmenuClick = (submenuName) => {
    setActiveSubmenu(submenuName);
  };

  return (
    <aside className="sidebar">
      <div className="logo" style={{borderBottom: '1px solid #DFE0EB', paddingBottom: '10px'}}>
        <img src="/logo.png" alt="Logo"/>
      </div>
      
      <nav className="nav">
        <Link         
          to="#" 
          className={`nav-link ${activeMenu === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleMenuClick('dashboard')}
        >
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.2799 13.61C15.1499 14.74 13.5299 15.09 12.0999 14.64L9.50995 17.22C9.32995 17.41 8.95995 17.53 8.68995 17.49L7.48995 17.33C7.08995 17.28 6.72995 16.9 6.66995 16.51L6.50995 15.31C6.46995 15.05 6.59995 14.68 6.77995 14.49L9.35995 11.91C8.91995 10.48 9.25995 8.86001 10.3899 7.73001C12.0099 6.11001 14.6499 6.11001 16.2799 7.73001C17.8999 9.34001 17.8999 11.98 16.2799 13.61Z" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.45 16.28L9.59998 15.42" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.3945 10.7H13.4035" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>Dashboard</span>
        </Link>

        <div className="nav-section">
          <button          
            className={`nav-link ${activeMenu === 'settings' ? 'active' : ''}`}
            onClick={() => {
              handleMenuClick('settings');
              toggleSubmenu();
            }}
          >
            <span>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0002 24.5156C12.2743 24.5156 11.5377 24.3531 10.9635 24.0173L5.00521 20.5831C2.57855 18.9473 2.42688 18.6981 2.42688 16.1306V9.86895C2.42688 7.30146 2.56771 7.05229 4.95105 5.43812L10.9527 1.97146C12.0902 1.31062 13.8777 1.31062 15.0152 1.97146L20.9952 5.41646C23.4218 7.05229 23.5735 7.30146 23.5735 9.86895V16.1198C23.5735 18.6873 23.4327 18.9365 21.0493 20.5506L15.0477 24.0173C14.4627 24.3531 13.726 24.5156 13.0002 24.5156ZM13.0002 3.10896C12.5452 3.10896 12.101 3.19562 11.7868 3.37979L5.82855 6.82479C4.06271 8.01645 4.06271 8.01646 4.06271 9.86895V16.1198C4.06271 17.9723 4.06271 17.9723 5.87188 19.1965L11.7868 22.609C12.426 22.9773 13.5852 22.9773 14.2243 22.609L20.1827 19.164C21.9377 17.9723 21.9377 17.9723 21.9377 16.1198V9.86895C21.9377 8.01646 21.9377 8.01645 20.1285 6.79229L14.2135 3.37979C13.8993 3.19562 13.4552 3.10896 13.0002 3.10896Z" fill="currentColor"/>
                <path d="M13 17.0625C10.7575 17.0625 8.9375 15.2425 8.9375 13C8.9375 10.7575 10.7575 8.9375 13 8.9375C15.2425 8.9375 17.0625 10.7575 17.0625 13C17.0625 15.2425 15.2425 17.0625 13 17.0625ZM13 10.5625C11.6567 10.5625 10.5625 11.6567 10.5625 13C10.5625 14.3433 11.6567 15.4375 13 15.4375C14.3433 15.4375 15.4375 14.3433 15.4375 13C15.4375 11.6567 14.3433 10.5625 13 10.5625Z" fill="currentColor"/>
              </svg>
            </span>
            <span>Settings</span>
            <span className={`arrow ${isSubmenuOpen ? 'open' : ''}`}>▾</span>
          </button>
          <div className={`sub-menu ${isSubmenuOpen ? 'show' : ''}`}>
            <Link 
             style={{textDecoration: 'none'}}
              to="/notification-settings" 
              className={`sub-link ${activeSubmenu === 'notification-settings' ? 'active-sub' : ''}`}
              onClick={() => handleSubmenuClick('notification-settings')}
            >
              Notification Settings
            </Link>
            <Link 
              style={{textDecoration: 'none'}}
              to="/personal-information" 
              className={`sub-link ${activeSubmenu === 'personal-information' ? 'active-sub' : ''}`}
              onClick={() => handleSubmenuClick('personal-information')}
            >
              Personal Information
            </Link>
          </div>
        </div>

        <Link 
        style={{textDecoration: 'none'}}
          to="#" 
          className={`nav-link notify ${activeMenu === 'notifications' ? 'active' : ''}`}
          onClick={() => handleMenuClick('notifications')}
        >
          <span>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4_556)">
                <path d="M25.2 17.675L22.75 15.4V11.375C22.75 6.825 19.425 3.15 14.875 2.625V0.875H13.125V2.625C8.74998 3.15 5.24998 6.825 5.24998 11.375V15.4L2.79998 17.675C2.62498 17.85 2.44998 18.025 2.62498 18.375V21C2.62498 21.525 2.97498 21.875 3.32498 21.875H9.62498C9.62498 24.325 11.55 26.25 14 26.25C16.45 26.25 18.375 24.325 18.375 21.875H24.5C25.025 21.875 25.375 21.525 25.375 21.175V18.375C25.375 18.2 25.2 17.85 25.2 17.675ZM14 24.5C12.6 24.5 11.375 23.275 11.375 21.875H16.625C16.625 23.275 15.4 24.5 14 24.5ZM23.625 20.125H4.37498V18.725L6.64998 16.275C6.82498 16.275 6.99998 15.925 6.99998 15.75V11.375C6.99998 7.525 10.15 4.375 14 4.375C17.85 4.375 21 7.525 21 11.375V15.75C21 15.925 21.175 16.275 21.175 16.45L23.625 18.725V20.125Z" fill="#9197B3"/>
              </g>
              <defs>
                <clipPath id="clip0_4_556">
                  <rect width="28" height="28" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>Notifications</span>
        </Link>

        <Link 
          style={{textDecoration: 'none'}}
          to="#" 
          className={`nav-link ${activeMenu === 'help' ? 'active' : ''}`}
          onClick={() => handleMenuClick('help')}
        >
          <span>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4_535)">
                <path d="M13 0C5.82833 0 0 5.82833 0 13C0 20.1717 5.82833 26 13 26C20.1717 26 26 20.1717 26 13C26 5.82833 20.1717 0 13 0ZM13 23.8333C7.02 23.8333 2.16667 18.98 2.16667 13C2.16667 7.02 7.02 2.16667 13 2.16667C18.98 2.16667 23.8333 7.02 23.8333 13C23.8333 18.98 18.98 23.8333 13 23.8333Z" fill="#9197B3"/>
                <path d="M13.9317 5.52501C11.8517 5.00501 9.53334 6.32668 8.905 8.36334C8.71 8.94834 9.035 9.55501 9.59834 9.72834C10.1617 9.90168 10.7683 9.59834 10.9633 9.01334C11.2667 8.06001 12.4367 7.38835 13.4333 7.62668C14.4083 7.86501 15.145 9.01334 14.95 10.01C14.7767 11.0067 13.715 11.8083 12.6967 11.6783C12.3933 11.635 12.0683 11.7433 11.8517 11.9383C11.6133 12.155 11.4833 12.4367 11.4833 12.7617V16.1417C11.4617 16.7483 11.9383 17.225 12.545 17.225C13.1517 17.225 13.6283 16.7483 13.6283 16.1417V13.78C15.3183 13.455 16.7917 12.09 17.095 10.3783C17.485 8.27668 16.0333 6.04501 13.9317 5.52501Z" fill="#9197B3"/>
                <path d="M12.5883 18.1783H12.5666C11.9816 18.1783 11.5049 18.6767 11.4833 19.2617V19.5C11.4833 20.085 11.9599 20.475 12.5449 20.4967H12.5666C13.1516 20.4967 13.6283 19.955 13.6499 19.37V19.1967C13.6283 18.6117 13.1733 18.1783 12.5883 18.1783Z" fill="#9197B3"/>
              </g>
              <defs>
                <clipPath id="clip0_4_535">
                  <rect width="26" height="26" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>Help</span>
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;