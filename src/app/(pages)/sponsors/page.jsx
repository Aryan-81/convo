// pages/sponsors.js
import styles from './sponsors.module.css';

const sponsors = [
  { name: 'Coca Cola', image: '/Assets/Coke.jpeg', title: 'Title Sponsor' },
  { name: 'Union Bank of India', image: '/Assets/union.png', title: 'Banking Partner' },
  { name: 'Monster Energy', image: '/Assets/monster.png', title: 'Energy Partner' },
  { name: 'AL Nutrition', image: '/Assets/nutrition.jpeg', title: 'Fitness and Nutrition Partner' },
  { name: 'Ninety One', image: '/Assets/ninety.jpg', title: 'Cycling Partner' },
  { name: 'Epigamia', image: '/Assets/epigamia.png', title: 'Beverage Partner' },
  { name: 'Beardo', image: '/Assets/beardo.jpg', title: 'Skincare Partner' },
  { name: 'Kingdom Of Cuisines', image: '/Assets/koc.jpeg', title: 'Food Partner' },
  { name: 'Unstop', image: '/Assets/unstop.png', title: 'Ignition Powered By' },
  { name: 'GoStops', image: '/Assets/goStops.jpeg', title: 'Travel Partner' },
  { name: 'Paramount Dealz', image: '/Assets/paramount.jpeg', title: 'Chess Partner' },
  { name: 'Languify', image: '/Assets/lang.jpeg', title: 'Education Partner' },
  { name: 'Flam', image: '/Assets/flam.jpeg', title: 'Metaverse Partner', last: true },
];

const SponsorsPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sponHead}>SPONSORS</h2>

      {sponsors.map((sponsor, index) => (
        <div key={index}>
          <div className={styles.sponTitle}>{sponsor.title}</div>
          <div className={styles.spon}>
            <div className={styles.image}>
              <img src={sponsor.image} alt={sponsor.name} />
            </div>
            <div className={styles.name}>{sponsor.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsorsPage;
