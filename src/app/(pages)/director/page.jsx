
// import Loader from '@/component/Loader';
import styles from './director.module.css';  
const DirectorSection = () => {
  return (
    <section
      className={`${styles.director} ${styles['sec-head']} ${styles['' + (styles['director'] || '')]}`}
      id="director"
    >
      <h2 className={`${styles['sec-header']} ${styles['dir-header']}`} id="dir-header-1">
        A MESSAGE FROM
      </h2>
      <h2 className={`${styles['sec-header']} ${styles['dir-header']}`}>THE DIRECTOR'S DESK</h2>
      
      <div className={styles['dir-cont']}>
        <div className={styles['dir-profile']}>
          <div className={styles['dir-img-div']}>
            <img src="./Assets/director.png" alt="" className={styles['dir-img']} />
          </div>
          <p className={`${styles['dir-para']} ${styles['dir-name']}`}>Sudhirkumar V Barai</p>
          <p className={styles['dir-para']} id="dir-post">Director, BITS Pilani, Pilani Campus</p>
        </div>

        <div className={styles['dir-msg-cont']}>
          <div className={styles['dir-msg']}>
            <svg className={styles['dir-quotes']} id="dir-quote-start" width="144" height="114" viewBox="0 0 144 114" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG Path */}
            </svg>

            <svg className={styles['dir-quotes']} id="dir-quote-end" width="144" height="114" viewBox="0 0 144 114" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG Path */}
            </svg>

            <p className={styles['dir-para']} id="dir-para-1">
              After two long years, the Sports Council of BITS Pilani is organizing its
              35th annual BOSM (BITS Open Sports Meet)...
            </p>

            <p className={styles['dir-para']} id="dir-para-2" style={{ fontWeight: 900 }}>
              I extend my best wishes to the organizers and the participants for a great Meet.
            </p>
          </div>

          <a className={styles['dir-more']} id="dir-more-top" href="Templates/director.html">CLICK TO READ MORE</a>
        </div>
      </div>

      <a className={styles['dir-more']} id="dir-more-bottom" href="Templates/director.html">CLICK TO READ MORE</a>
    </section>
  );
};

export default DirectorSection;
