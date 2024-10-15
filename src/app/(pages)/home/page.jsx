import styles from './home.module.css';
import SideNavScroll from '@/component/SideNavScroll';
import DirectorPage from '../director/page';
import Gallery from '../gallery/page';
import Team from '../team/page';
import Hero from './hero';
import About from '../about/page';
import Events from '../events/page';

export default function Home() {

    return (
        <main className={`${styles.page} page`}>
            <SideNavScroll />
            <Hero/>
            <section className={styles.sec}><About/></section>
            <section className={styles.sec}><Events/></section>
            <section className={styles.sec}><DirectorPage/></section>
            <section className={styles.sec}><Team/></section>

        </main>
    )
}