'use client';


import { useEffect } from "react";

import styles from './sideNav.module.css'

export default function SideNavScroll() {
  useEffect(() => {
    const sideScroll = document.getElementById("sideScroll");
    const rate = 0.087;


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
      <div className={styles.indici}>
      </div>
      <div>
        <a className={styles.navBut} href="#contact">CONTACT</a>
      </div>
      <div >
        <a className={styles.navBut} href="#director">MESSAGE</a>
      </div>
      <div>
        <a className={styles.navBut} href="#events">EVENTS</a>
      </div>
      <div >
        <a className={styles.navBut} href="#about-sec">ABOUT</a>
      </div>
      <div>
        <a className={styles.navBut} href="#">HOME</a>
      </div>
    </div>
  )
}