import styles from './hero.module.css'

export default function Hero(){
    return(
        <>
             {/* <div className={styles['lines']}>
                {['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l11'].map((id, index) => (
                    <div className={styles['line']} key={index} id={id}>
                        <img src={`/assets/${id === 'l3' || id === 'l4' || id === 'l7' || id === 'l10' ? 'Red' : 'Blue'}Line.png`} />
                    </div>
                ))}
            </div>
            <img className={styles['phoneBgMain']} src="/Assets/phoneMainBg.png" />
            <img className={styles['bgMain']} src="/Assets/bgMain.png" />
            <img className={styles['fall-red']} src="/Assets/fall-red.png" />
            <img className={styles['fall-blue']} src="/Assets/fall-blue.png" />
            <img className={styles['fall-yellow']} src="/Assets/fall-yellow.png" />

            <img className={styles['bg-red']} src="/assets/rs.png" />
            <img className={styles['bg-blue']} src="/assets/bs.png" />
            <img className={styles['bg-yellow']} src="/assets/ys.png" />

            <div className={styles['home-page']}>
                <nav className={styles['nav']}>
                    <div className={styles['left']}>
                        <img src="/assets/Logo.png" alt="Logo" />
                    </div>
                    <div className={styles['right']}>
                        <a className={styles['spon']} href="/templates/sponsors.html">SPONSORS</a>
                        <a className={styles['regist']} href="/templates/registration.html" id={styles['desktopRegist']}>REGISTRATION</a>
                        <div className={styles['ham-cont']}>
                            <div className={styles['hamburger']}>
                                <span className={styles['ham-1']}></span>
                                <span className={styles['ham-2']}></span>
                                <span className={styles['ham-3']}></span>
                            </div>
                        </div>
                    </div>
                </nav>

                <main>
                    <div className={`${styles['pictures']} ${styles['sec-head']}`}>
                        <div className={styles['leftImg']}>
                            <img className={styles['light']} id={styles['lightRed']} src="/assets/Red Light.png" />
                            <img className={`${styles['rp']} ${styles['player']}`} src="/assets/Red.png" />
                        </div>
                        <div className={styles['centerImg']}>
                            <img className={styles['light']} id={styles['lightBlue']} src="/assets/Blue Light.png" />
                            <img className={`${styles['bp']} ${styles['player']}`} src="/assets/Blue.png" />
                        </div>
                        <div className={styles['rightImg']}>
                            <img className={styles['light']} id={styles['lightYellow']} src="/assets/Yellow Light.png" />
                            <img className={`${styles['yp']} ${styles['player']}`} src="/assets/Yellow.png" />
                        </div>
                    </div>

                    <div className={styles['text']}>
                        <img id={styles['bosm']} src="/assets/BOSMText.png" />
                        <img id={styles['bosmr']} src="/assets/RiseText.png" />
                    </div>

                    <a className={styles['regist']} href="/templates/registration.html" id={styles['phoneRegist']}>REGISTER</a>
                </main>

                <footer>
                    <div className={styles['time']}>
                        <div className={styles['numbers']}>
                            <div id="days">00</div>
                            <span>:</span>
                            <div id="hours">00</div>
                            <span>:</span>
                            <div id="min">00</div>
                        </div>
                        <div className={styles['labels']}>
                            <div className={styles['label-1']}>DAYS</div>
                            <div className={styles['label-2']}>HOURS</div>
                            <div className={styles['label-3']}>MINUTES</div>
                        </div>
                    </div>

                    <div className={styles['socials']}>
                        <a href="https://www.facebook.com/bosmbitspilani" target="_blank">
                            <i aria-hidden="true" className="fa fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/bitsbosm/" target="_blank">
                            <i aria-hidden="true" className="fa fa-instagram"></i>
                        </a>
                    </div>
                </footer>
            </div> */}
            <div style={{height:'100vh'}}></div>
        </>
    )
}