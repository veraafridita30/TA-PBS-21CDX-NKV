import React from 'react';
import styles from './PentingnyaKonservasiLaut.module.css';

const PentingnyaKonservasiLaut: React.FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Pentingnya Konservasi Laut</h1>
            </header>

            <main className={styles.main}>
                <section className={styles.section}>
                    <h2>Apa Itu Konservasi Laut?</h2>
                    <p>
                        Konservasi Laut adalah upaya untuk melindungi dan melestarikan
                        ekosistem laut serta keanekaragaman hayati di dalamnya.
                        Hal ini meliputi perlindungan terhaadap terumbu karang, 
                        mangrove, padang lamun, dan berbagai spesies laut dari ancaman
                        aktivitas manusia seperti polusi, penangkapan ikan yang
                        berlebihan dan perubahan iklim
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Mengapa Konservasi Laut Penting ?</h2>
                    <ul>
                        <li>
                            <strong>Menjaga Keanekaragaman Hayati:</strong> Laut adalah
                            rumah bagi jutaan spesies makluk hidup yang unik.
                            Melindungi habitat laut membantu menjaga keanekaraman hayati.
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}
    