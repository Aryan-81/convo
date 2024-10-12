import styles from './home.module.css';
import SideNavScroll from '@/component/SideNavScroll';
import DirectorPage from '../director/page';
import Gallery from '../gallery/page';
import Team from '../team/page';
import Hero from './hero';

export default function Home() {

    return (
        <main className={`${styles.page} page`}>
            <Hero/>

            <section className={styles.sec}><SideNavScroll /></section>
            <section className={styles.sec}><Gallery/></section>
            <section className={styles.sec}><DirectorPage/></section>
            <section className={styles.sec}><Team/></section>

        </main>
    )
}