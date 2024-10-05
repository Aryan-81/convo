'use client';


import { useEffect } from "react";

import styles from './sideNav.module.css'

export default function SideNavScroll() {
    useEffect(() => {
        const sideScroll = document.getElementById("sideScroll");
        const scrollElems = Array.from(document.getElementsByClassName(styles.navBut)); // Using the module class
        const rate = 0.087;
    
        sideScroll.addEventListener("click", (e) => {
          scrollElems.forEach((element) => {
            if (element.classList.contains(styles.active)) {
              element.classList.remove(styles.active);
            }
          });
          e.target.classList.add(styles.active);
        });
    
        const handleScroll = () => {
          let windowHeight = window.innerHeight;
          let y = window.pageYOffset;
          let scrolled = -y * rate + "px";
          sideScroll.style.setProperty("--sideScroll", scrolled);
        };
    
        document.addEventListener("scroll", handleScroll);
    
        return () => {
          document.removeEventListener("scroll", handleScroll);
        };
      }, []);
    return (
            <div className={styles.scrollNav} id="sideScroll">
                <div id="contact">
                    <a className={styles.navBut} href="#contactUs">CONTACT</a>
                </div>
                <div id="message">
                    <a className={styles.navBut} href="#director">MESSAGE</a>
                </div>
                <div id="events">
                    <a className={styles.navBut} href="#eventsHere">EVENTS</a>
                </div>
                <div id="about">
                    <a className={styles.navBut} href="#about-sec">ABOUT</a>
                </div>
                <div id="main">
                    <a className={styles.navBut} href="#">HOME</a>
                </div>
            </div>
    )
}