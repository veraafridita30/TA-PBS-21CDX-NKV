import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h2 className={styles.footerHeading}>Tentang</h2>
                        <p>Website ini didedikasikan untuk memberikan edukasi tentang
                            pentingnya konservasi laut, mengidentifikasi ancaman terhadap lingkungan 
                            laut, dan menginspirasi orang untuk berkontribusi dalam perlindungan
                            laut.
                        </p>
                    </div>
                    <div className={styles.footerSection}>
                        <h2 className={styles.footerHeading}>Navigasi</h2>
                        <ul className={styles.footerMenu}>
                            <li><a href="/">Beranda</a></li>
                            <li><a href="/pentingnya-konservasi">Pentingnya Konservasi Laut</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}