import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.navbarLogi}>
                  Edukasi Laut 
                </Link>
                <ul className={styles.navbarMenu}>
                    <li className={styles.navbarItem}>
                        <Link href="/pentingnya-konservasi" className={styles.navbarLink}>
                          Pentingnya Konservasi Laut
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/ancaman-lingkungan laut" className={styles.navbarLink}>
                          Ancaman Terhadap Lingkungan Laut 
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link href="/berkontribusi-perlindungan-laut" className={styles.navbarLink}>
                          Berkontribusi dalam Perlindungan Laut 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;