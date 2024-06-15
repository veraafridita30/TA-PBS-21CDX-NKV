import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';

const App: React.FC = () => {
    return (
        <div className="container">
            <header>
                <h1>Konservasi Laut</h1>
                <p>Mari Lindungi laut kita untuk generasi mendatang</p>
            </header>

            <main>
                <section>
                    <h2>Pentingnya Konservasi Laut</h2>
                    <p>Laut merupakan sumber kehidupan bagi jutaan spesies,
                        termasuk manusia. Laut menyediakan oksigen,makanan, dan mengatur iklim
                        global. Konservasi laut penting untuk menjaga keseimbangan ekosistem dan
                        keanekaragaman hayati
                    </p>
                </section>

                <section>
                    <h2>Ancaman Terhadap Lingkungan Laut</h2>
                    <ul>
                        <li>Pencemaran plastik : Sampah plastik mencemari lautan dan membahayakan kehidupan laut.</li>
                        <li>Penangkapan ikan berlebihan : Overfishing mengganggu populasi ikan dan ekosistem laut.</li>
                        <li>Perubahan iklim : Pemanasan global menyebabkan naiknya suhu air laut dan mempengaruhi kehidupan laut.</li>
                        <li>Kerusakan terumbu karang : Aktivitas manusia dan pemanasan global merusak terumbu karang
                            yang merupakan habitat penting bagi banyak spesies laut.</li>    
                    </ul>
                </section>

                <section>
                    <h2>Cara Berkontribusi dalam Perlindungan Laut</h2>
                    <ul>
                        <li>Mengurangi penggunaan plastik : Gunakan produk yang dapat didaur ulang dan kurangi penggunaan plastik sekali pakai.</li>
                        <li>Dukung produk laut yang berkelanjutan : Pilih produk laut yang ditangkap atau dibudidayakan secara berkelanjutan.</li>
                        <li>Ikut serta dalam kegiatan bersih-bersih pantai : Berpartisipasi dalam kegiatan bersih-bersih pantai untuk mengurangi sampah di laut.</li>
                    </ul>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Konservasi Laut. Semua hak dilindungi.</p>
            </footer>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));