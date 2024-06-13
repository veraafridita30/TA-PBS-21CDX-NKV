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
                            <li><a href="/ancaman-lingkungan-laut">Ancaman Terhadap Lingkungan Laut</a></li>
                            <li><a href="/berkontribusi-perlindungan-laut">Berkontribusi dalam Perlindungan Laut</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h2 className={styles.footerHeading}>Kontak</h2>
                        <p>Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk menghubungu kami melalui email atau media sosial.</p>
                        <div className={styles.footerSosialIcons}>
                            <a href="mailto:info@educateocean.com"><i className="fa fa-envelope"></i></a>
                            <a href="https://twitter.com/educateocean"><i className="fa fa-twitter"></i></a>
                            <a href="https://www.fecebook.com/educateocean"><i className="fa fa-fecebook"></i></a>
                            <a href="https://www.instagram.com/educateocean"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>Hak Cipta @ {new Date ().getFullYear()} Edukasi Laut. Semua Hak Dilindungi.</p>
            </div>
        </footer>
    );

};

export default Footer;