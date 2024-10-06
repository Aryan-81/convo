import Head from 'next/head';
import styles from './Team.module.css';

export default function Team() {
  const teamMembers = [
    {
      name: 'Prateek Kashyap',
      role: 'Front-End',
      img: '/Assets/prateek.png',
      instagram: 'https://www.instagram.com/prateekkashyap',
      github: 'https://github.com/bit-by-bits',
      linkedin: 'https://www.linkedin.com/in/bit-by-bits/',
    },
    {
      name: 'Shwetabh Niket',
      role: 'Front-End',
      img: '/Assets/shwetabh.jpeg',
      instagram: 'https://www.instagram.com/shwetabhniket',
      github: 'https://github.com/nIMblEt06',
      linkedin: 'https://www.linkedin.com/in/niketshwetabh/',
    },
    // Add more team members...
  ];

  return (
    <>
      <Head>
        <title>Team</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM5D9mk6tpdbe6E5D6UdePu0RTy1z0ybuo5xgQ"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={styles.container}>
        <h2 className={styles.teamHead}>Our Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.profileCard}>
              <div className={styles.imgWrapper}>
                <img src={member.img} alt={member.name} className={styles.profileImg} />
              </div>
              <h3 className={styles.profileName}>{member.name}</h3>
              <p>{member.role}</p>

              {/* Social Media Links */}
              <div className={styles.socialLinks}>
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
