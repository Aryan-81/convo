import styles from './about.module.css';

export default function About() {
    return (
        <div className={styles.About}>
            <div className={styles.ctr}>
                <div className={styles.textCtr}>
                    <h1>About Us</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, perspiciatis,
                        obcaecati molestiae quas quae vero amet maiores dignissimos vitae neque saepe accusantium totam,
                        fugit dolor ducimus at voluptatibus omnis magnam!</p>
                        <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, 
                        non aliquam unde necessitatibus quisquam quidem numquam incidunt? Deleniti corrupti, 
                        cupiditate incidunt quasi beatae omnis facilis laudantium dignissimos, sit porro animi!</p>
                        <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, 
                    non aliquam unde necessitatibus quisquam quidem numquam incidunt? Deleniti corrupti, 
                    cupiditate incidunt quasi beatae omnis facilis laudantium dignissimos, sit porro animi!</p>
                </div>
                <hr />
                <div className={styles.imgCtr}>image scroll may be</div>
            </div>
        </div>
    )
}