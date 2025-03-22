import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import './Header.css';
import logoSmall from '../../assets/logo.png';
import logoLarge from '../../assets/logo2.png';
import { showDropdown, hideDropdown, handleHoverAnimation } from './dropdownAnimation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
  // Removed unused variable: submenuVisible
  
  // Get current location to detect route changes
  const location = useLocation();
  
  // Refs for GSAP animations
  const headerRef = useRef(null);
  const menuItemsRef = useRef([]);
  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);
  const submenuRef = useRef(null);
  const navMenuRef = useRef(null);

  // Define animateHamburger first since it's used by closeMenu
  const animateHamburger = useCallback((open) => {
    if (!hamburgerRef.current) return;
    
    const lines = hamburgerRef.current.querySelectorAll('.hamburger-line');
    
    if (open) {
      // Animate to X
      gsap.to(lines[0], { 
        rotation: 45, 
        y: 8, 
        duration: 0.4,
        ease: "power2.inOut" 
      });
      
      gsap.to(lines[1], { 
        opacity: 0, 
        duration: 0.2,
        ease: "power2.inOut" 
      });
      
      gsap.to(lines[2], { 
        rotation: -45, 
        y: -8, 
        duration: 0.4,
        ease: "power2.inOut" 
      });
    } else {
      // Animate back to hamburger
      gsap.to(lines[0], { 
        rotation: 0, 
        y: 0, 
        duration: 0.4,
        ease: "power2.inOut" 
      });
      
      gsap.to(lines[1], { 
        opacity: 1, 
        duration: 0.2,
        ease: "power2.inOut" 
      });
      
      gsap.to(lines[2], { 
        rotation: 0, 
        y: 0, 
        duration: 0.4,
        ease: "power2.inOut" 
      });
    }
  }, []);

  // Define closeMenu after animateHamburger to avoid dependency issues
  const closeMenu = useCallback(() => {
    setIsOpen(false);
    
    // Reset any open submenus
    setActiveMenuItem(null);
    
    // Animate hamburger back
    animateHamburger(false);
    
    // Animate menu closing
    if (navMenuRef.current) {
      gsap.to(navMenuRef.current, {
        right: window.innerWidth <= 576 ? "-280px" : "-300px",
        duration: 0.4,
        ease: "power3.inOut",
        onComplete: () => {
          // Re-enable scrolling
          document.body.style.overflow = '';
        }
      });
    }
  }, [animateHamburger]);

  const openMenu = useCallback(() => {
    setIsOpen(true);
    
    // Animate hamburger to X
    animateHamburger(true);
    
    // Animate menu opening
    if (navMenuRef.current) {
      gsap.to(navMenuRef.current, {
        right: 0,
        duration: 0.4,
        ease: "power3.inOut"
      });
      
      // Animate menu items appearing
      const mobileMenuItems = navMenuRef.current.querySelectorAll('.menu-item');
      gsap.fromTo(
        mobileMenuItems,
        { 
          x: 50,
          opacity: 0 
        },
        { 
          x: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.out",
          delay: 0.2
        }
      );
    }
    
    // Disable body scrolling
    document.body.style.overflow = 'hidden';
  }, [animateHamburger]);
  
  const toggleMenu = useCallback(() => {
    console.log("Toggle menu clicked, current state:", isOpen);
    if (!isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isOpen, openMenu, closeMenu]);

  // Handle screen resize for responsive logo
  useEffect(() => {
    const handleResize = () => {
      const largeScreen = window.innerWidth >= 992;
      setIsLargeScreen(largeScreen);
      
      // Close mobile menu if screen is resized to desktop
      if (largeScreen && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, closeMenu]);
  
  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      closeMenu();
    }
  }, [location, isOpen, closeMenu]);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && 
          navMenuRef.current && !navMenuRef.current.contains(event.target) && 
          hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeMenu]);
  
  // Initial animations when component mounts
  useEffect(() => {
    // Logo animation
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { 
          opacity: 0,
          x: -30
        },
        { 
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out"
        }
      );
    }
    
    // Hamburger animation
    if (hamburgerRef.current) {
      gsap.fromTo(
        hamburgerRef.current,
        {
          opacity: 0,
          x: 30
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out"
        }
      );
    }
    
    // Menu items animation - staggered entry
    if (menuItemsRef.current.length > 0) {
      gsap.fromTo(
        menuItemsRef.current,
        { 
          y: -20,
          opacity: 0 
        },
        { 
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.3
        }
      );
    }
  }, []);

  // Handle dropdown menu animations
  const handleMouseEnter = useCallback((menuIndex) => {
    setActiveMenuItem(menuIndex);
    // Using submenu visibility directly through DOM manipulation instead of state
    
    if (submenuRef.current) {
      showDropdown(submenuRef.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (submenuRef.current) {
      hideDropdown(submenuRef.current, () => {
        setActiveMenuItem(null);
        // No need to set submenuVisible state
      });
    }
  }, []);

  // Toggle submenu in mobile view
  const toggleSubmenu = useCallback((menuIndex, e) => {
    if (window.innerWidth < 992) {
      e.preventDefault();
      
      if (activeMenuItem === menuIndex) {
        setActiveMenuItem(null);
      } else {
        setActiveMenuItem(menuIndex);
      }
    }
  }, [activeMenuItem]);

  // GSAP hover effect for menu items
  const handleMenuItemHover = useCallback((e, enter) => {
    handleHoverAnimation(e.currentTarget, enter);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'The Team', path: '/team' },
    { name: 'Services', path: '/services' },
    { name: 'BEE', path: '/bee' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'News & Articles', path: '/news' },
    { name: 'Since 1908', path: '/history' },
    { 
      name: 'PAIA Information Manual & Guides', 
      path: '/paia',
      submenu: [
        { name: 'PAIA Manual', path: '/paia/manual' },
        { name: 'PAIA Guide - English', path: '/paia/guide-english' },
        { name: 'PAIA Guide- Afrikaans', path: '/paia/guide-afrikaans' },
        { name: 'PAIA Guide - iSizulu', path: '/paia/guide-isizulu' }
      ]
    }
    // POPI link removed as requested
  ];

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img 
              src={isLargeScreen ? logoLarge : logoSmall} 
              alt="Harvey Nortje Logo" 
              className="logo" 
              ref={logoRef}
            />
          </Link>
        </div>
        
        <div className="nav-container">
          <nav className={`nav-menu ${isOpen ? 'open' : ''}`} ref={navMenuRef}>
            <ul className="menu-items">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`menu-item ${item.submenu ? 'has-submenu' : ''} ${activeMenuItem === index ? 'submenu-active' : ''} ${location.pathname === item.path ? 'active' : ''}`}
                  onMouseEnter={(e) => {
                    if (window.innerWidth >= 992) {
                      item.submenu && handleMouseEnter(index);
                      handleMenuItemHover(e, true);
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (window.innerWidth >= 992) {
                      item.submenu && handleMouseLeave();
                      handleMenuItemHover(e, false);
                    }
                  }}
                  ref={el => menuItemsRef.current[index] = el}
                >
                  {item.submenu ? (
                    // For items with submenu
                    <>
                      <Link 
                        to={item.path}
                        onClick={(e) => item.submenu && toggleSubmenu(index, e)}
                        className={location.pathname === item.path ? 'active' : ''}
                      >
                        {item.name}
                        <span className="dropdown-arrow"></span>
                      </Link>
                      
                      <ul 
                        className={`submenu ${activeMenuItem === index ? 'active' : ''}`}
                        ref={activeMenuItem === index ? submenuRef : null}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="submenu-item">
                            <Link 
                              to={subItem.path}
                              onClick={() => window.innerWidth < 992 && closeMenu()}
                              className={location.pathname === subItem.path ? 'active' : ''}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    // For regular menu items
                    <Link 
                      to={item.path}
                      onClick={() => window.innerWidth < 992 && closeMenu()}
                      className={location.pathname === item.path ? 'active' : ''}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <button 
          className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu} 
          ref={hamburgerRef}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          type="button"
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