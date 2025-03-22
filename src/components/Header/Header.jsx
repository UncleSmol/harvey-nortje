import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { showDropdown, hideDropdown, handleHoverAnimation } from './dropdownAnimation';
import logo1 from '../../assets/logo1.png'; // Import the small logo
import logo2 from '../../assets/logo2.png'; // Import the large logo

const Header = () => {
  // State to track mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // State to track which dropdown is active
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // State to track which logo to display
  const [useMobileLogo, setUseMobileLogo] = useState(window.innerWidth < 992);
  
  // References to DOM elements
  const navMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  
  // Pre-create refs for all menu items and submenus
  const menuItemRefs = useRef({});
  const submenuRefs = useRef({});
  
  // Menu structure (wrapped in useMemo to avoid re-creation on each render)
  // Updated to match the exact pages in src/pages folder
  const menuItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'History', path: '/history' },
    { name: 'News', path: '/news' },
    { name: 'Careers', path: '/careers' },
    { name: 'BEE', path: '/bee' },
    { name: 'PAIA', path: '/paia' },
    { name: 'Contact', path: '/contact' }
  ], []);
  
  // Track whether we're on mobile viewport
  const isMobileView = () => window.innerWidth < 992;
  
  // Toggle mobile menu
  const toggleMobileMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setMobileMenuOpen(!mobileMenuOpen);
    
    // Toggle active class on hamburger button for animation
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle('active');
    }
    
    // Toggle active class on nav menu for sliding animation
    if (navMenuRef.current) {
      navMenuRef.current.classList.toggle('active');
    }
  };
  
  // Handle dropdown toggling
  const toggleDropdown = (index, e) => {
    // Prevent default link behavior
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // On mobile, toggle the dropdown state
    if (isMobileView()) {
      // If clicking the already active dropdown, close it
      if (activeDropdown === index) {
        setActiveDropdown(null);
      } else {
        // Otherwise, open this dropdown and close others
        setActiveDropdown(index);
      }
    }
  };
  
  // Initialize refs for menu items and submenus
  useEffect(() => {
    // Create refs for each menu item
    menuItems.forEach((_, index) => {
      menuItemRefs.current[index] = React.createRef();
      
      // Create refs for submenus if they exist
      if (menuItems[index].submenu && menuItems[index].submenu.length > 0) {
        submenuRefs.current[index] = React.createRef();
      }
    });
  }, [menuItems]);
  
  // Handle mouse enter for desktop dropdown
  const handleMouseEnter = (index) => {
    if (!isMobileView() && submenuRefs.current[index]) {
      setActiveDropdown(index);
      showDropdown(submenuRefs.current[index].current);
    }
  };
  
  // Handle mouse leave for desktop dropdown
  const handleMouseLeave = (index) => {
    if (!isMobileView() && submenuRefs.current[index]) {
      setActiveDropdown(null);
      hideDropdown(submenuRefs.current[index].current);
    }
  };
  
  // Handle item hover animation
  const handleItemHover = (index, isEntering) => {
    const element = menuItemRefs.current[index]?.current;
    if (element) {
      handleHoverAnimation(element, isEntering);
    }
  };
  
  // Update logo and handle mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 992;
      
      // Update logo based on screen size
      setUseMobileLogo(isMobile);
      
      // Close mobile menu when resizing to desktop
      if (!isMobile && mobileMenuOpen) {
        setMobileMenuOpen(false);
        if (hamburgerRef.current) hamburgerRef.current.classList.remove('active');
        if (navMenuRef.current) navMenuRef.current.classList.remove('active');
      }
    };
    
    // Set initial logo state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && 
          navMenuRef.current && 
          !navMenuRef.current.contains(event.target) && 
          hamburgerRef.current && 
          !hamburgerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        hamburgerRef.current.classList.remove('active');
        navMenuRef.current.classList.remove('active');
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);
  
  // Function to close mobile menu (reused in multiple places)
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    if (hamburgerRef.current) hamburgerRef.current.classList.remove('active');
    if (navMenuRef.current) navMenuRef.current.classList.remove('active');
  };
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img 
              src={useMobileLogo ? logo1 : logo2} 
              alt="Harvey Nortje Attorneys" 
              className="logo" 
            />
          </Link>
        </div>
        
        <div className="nav-container">
          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} ref={navMenuRef}>
            <ul className="menu-items">
              {menuItems.map((item, index) => {
                // Determine if this is a dropdown item
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                
                // Determine if this dropdown is active
                const isActive = activeDropdown === index;
                
                return (
                  <li 
                    key={index}
                    className={`menu-item ${hasSubmenu ? 'has-submenu' : ''} ${isActive ? 'submenu-active' : ''}`}
                    style={{ '--item-index': index }} // For staggered animation
                    onMouseEnter={hasSubmenu ? () => handleMouseEnter(index) : undefined}
                    onMouseLeave={hasSubmenu ? () => handleMouseLeave(index) : undefined}
                    ref={menuItemRefs.current[index]}
                  >
                    {hasSubmenu ? (
                      <>
                        <button 
                          className="dropdown-button"
                          onClick={(e) => toggleDropdown(index, e)}
                          onMouseEnter={() => handleItemHover(index, true)}
                          onMouseLeave={() => handleItemHover(index, false)}
                        >
                          {item.name}
                          <span className="dropdown-arrow"></span>
                        </button>
                        <ul 
                          className={`submenu ${isMobileView() && isActive ? 'active' : ''}`}
                          ref={submenuRefs.current[index]}
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="submenu-item">
                              <Link 
                                to={subItem.path}
                                onClick={closeMobileMenu}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link 
                        to={item.path}
                        onMouseEnter={() => handleItemHover(index, true)}
                        onMouseLeave={() => handleItemHover(index, false)}
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          ref={hamburgerRef}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          <div className="hamburger">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
