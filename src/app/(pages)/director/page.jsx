
// import Loader from '@/component/Loader';
import styles from './director.module.css';  // Director-specific styles

const DirectorPage = () => {
  return (
    <div className={styles.directorPage}>
      <h2 className={`${styles.secHeader} ${styles.dirHeader}`}>A MESSAGE FROM</h2>
      <h2 className={`${styles.secHeader} ${styles.dirHeader}`}>THE DIRECTOR'S DESK</h2>

      <div className={styles.dirCont}>
        <div className={styles.dirProfile}>
          <img src="/Assets/director.png" alt="Director" className={styles.dirImg} />
          <p className={`${styles.dirPara} ${styles.dirName}`}>Manoj Singh Gaur</p>
          <p className={`${styles.dirPara} ${styles.dirIntro}`} id="dir-post">Director, IIT Jammu</p>
        </div>

        <div className={styles.dirMsgCont}>
          <div className={styles.dirMsg}>
            {/* SVG Quotes */}
            <svg className={styles.dirQuotes} id="dir-quote-start-page" width="144" height="114" viewBox="0 0 144 114" fill="none">
              {/* SVG content */}
            </svg>
            <p className={styles.dirPara}>Everything has pros and cons...</p>
            <p className={styles.dirPara}>The significance of sports...</p>
            {/* Add all other paragraphs here */}
            <p className={styles.dirPara}><strong>I extend my best wishes...</strong></p>
            <svg className={styles.dirQuotes} id="dir-quote-end-page" width="144" height="114" viewBox="0 0 144 114" fill="none">
              {/* SVG content */}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorPage;
