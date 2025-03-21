import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Header.css';
import logoSmall from '../../assets/logo.png';
import logoLarge from '../../assets/logo2.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState('');
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  
  // Refs for GSAP animations
  const headerRef = useRef(null);
  const menuItemsRef = useRef([]);
  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);
  const submenuRef = useRef(null);
  
  // Reset refs array
  const resetMenuItemsRef = () => {
    menuItemsRef.current = [];
  };

  // Handle screen resize for responsive logo
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      // Animate menu opening
      gsap.to(".nav-menu", {
        right: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
    } else {
      // Animate menu closing
      gsap.to(".nav-menu", {
        right: "-300px",
        duration: 0.4,
        ease: "power2.inOut"
      });
    }
  };

  // Handle dropdown menu animations
  const handleMouseEnter = (menuItem) => {
    setShowSubmenu(menuItem);
    setSubmenuVisible(true);
    
    // Ensure previous animations are cleared
    gsap.killTweensOf(".submenu");
    
    // Make sure submenu is visible before animating
    gsap.set(".submenu", { display: "block" });
    
    // Animate submenu appearance
    gsap.fromTo(
      ".submenu",
      { 
        opacity: 0,
        y: 15,
        transformOrigin: "top center"
      },
      { 
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      }
    );
  };

  const handleMouseLeave = () => {
    // Animate submenu disappearance
    gsap.to(".submenu", {
      opacity: 0,
      y: 15,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setShowSubmenu('');
        setSubmenuVisible(false);
        gsap.set(".submenu", { display: "none" });
      }
    });
  };

  // GSAP hover effect for menu items
  const handleMenuItemHover = (e, enter) => {
    if (window.innerWidth >= 992) {
      gsap.to(e.currentTarget, {
        y: enter ? -3 : 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

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
          <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <ul className="menu-items">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`menu-item ${item.submenu ? 'has-submenu' : ''}`}
                  onMouseEnter={(e) => {
                    item.submenu && handleMouseEnter(item.name);
                    handleMenuItemHover(e, true);
                  }}
                  onMouseLeave={(e) => {
                    item.submenu && handleMouseLeave();
                    handleMenuItemHover(e, false);
                  }}
                  ref={el => menuItemsRef.current[index] = el}
                >
                  <Link to={item.path}>{item.name}</Link>
                  
                  {item.submenu && showSubmenu === item.name && (
                    <ul 
                      className="submenu" 
                      ref={submenuRef}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="submenu-item">
                          <Link to={subItem.path}>{subItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="mobile-menu-toggle" onClick={toggleMenu} ref={hamburgerRef}>
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
