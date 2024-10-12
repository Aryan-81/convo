'use client';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css'; // Assuming you are using CSS modules

export default function NavBar() {
    const [toggle, setToggle] = useState(false); // Correct state syntax

    const handleToggle = () => {
        setToggle(!toggle); // Simplified toggle logic
    };
    useEffect(() => {
        if (toggle) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }
    }, [toggle]);

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="Logo" /> {/* Add your logo image path */}
            </div>
            <div className={styles.links}>
                <div className={`${styles.hubrCtr} ${toggle ? styles.active : ''}`}>
                    {/* FontAwesome Hamburger/Close icon */}
                    <button onClick={handleToggle} className={styles.toggleButton}>
                        <FontAwesomeIcon icon={toggle ? faTimes : faBars} size="2x" /> {/* Hamburger or Close */}
                    </button>

                    {/* Example of menu links - show or hide based on toggle */}
                    {toggle && (
                        <div className={styles['ham-grid']}>
                        {/* Logo */}
                        <div className={`${styles['ham-logo']} ${styles['ham-hide']}`}>
                          <img src="/Assets/ham-logo.png" alt="Logo" />
                        </div>
                  
                        {/* Image Section */}
                        <div className={`${styles['ham-img']} ${styles['ham-hide']}`}>
                          <img src="/Assets/ham-img.png" alt="Ham Image" />
                          <span></span>
                        </div>
                  
                        {/* Links Section */}
                        <div className={styles['ham-links']}>
                          <div>
                            <a href="/Templates/ignition.html">IGNITION</a>
                            <a href="/Templates/gallery.html">GALLERY</a>
                            <a href="/Templates/sponsors.html">SPONSORS</a>
                            <a href="https://dvm-bitspilani.github.io/bosm-2019-main/">ARCHIVES</a>
                            <a style={{ display: 'none' }} href="#">LOGIN</a>
                            <a href="/Templates/developers.html">DEVELOPERS</a>
                          </div>
                        </div>
                  
                        {/* Text Section */}
                        <div className={`${styles['ham-text']} ${styles['ham-hide']}`}>
                          <img src="/Assets/ham-text.png" alt="Ham Text" />
                          <span></span>
                        </div>
                  
                        {/* Social Media Icons */}
                        <div className={`${styles['ham-icons']} ${styles['ham-hide']}`}>
                          <a href="https://www.facebook.com/bosmbitspilani" target="_blank" rel="noopener noreferrer">
                            <img aria-hidden="true" src="/Assets/Facebook.png" className={styles['ham-icon']} alt="Facebook Icon" />
                          </a>
                          <a href="https://www.instagram.com/bitsbosm/" target="_blank" rel="noopener noreferrer">
                            <img aria-hidden="true" src="/Assets/Instagram.png" className={styles['ham-icon']} alt="Instagram Icon" />
                          </a>
                        </div>
                      </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
