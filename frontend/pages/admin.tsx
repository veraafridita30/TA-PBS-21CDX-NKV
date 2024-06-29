
import React, {useState} from 'react';
import './admin.module.css';

interface Article {
    id: number;
    title: string;
    content: string;
}

const Admin: React.FC = () => {
    const [articles, serArticles] = useState<Article[]>([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editId, setEditId] = useState<number | null>(null);

    const handleAddArticle = () => {
        if (title.trim() === '' || content.trim() === '') {
            alert('Konservasi Laut');
            return;
        }
        if (editId !== null) {
            setArticles(
                articles.map((article) =>
                    article.id === editId ? { id: editId, title, content } : article)
            );
            setEditId(null);
        }else {
         const newArticle: Article = {
            id: articles.length + 1,
            title,
            content,
         };
         setArticles([...articles, newArticle]);
        }
        setTitle('');
        setContent('');
    };

    const handleDeleteArticle = (id: number) => {
        serArticles(articles.filter((article) => article.id !== id));
    };

    return (
        <div className="admin-container">
            <header className="admin-header">
                <h1>Admin Panel - Konservasi Laut</h1>
            </header>
            <main className="admin-main">
                <section className="admin-section">
                    <h2>{editId ! == null ? 'Edit Artikel' : 'Tambah Artikel Baru'}</h2>
                    <input
                        type="text"
                        placeholder="Judul Artikel"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="admin-input" 
                    />
                    <textarea
                        placeholder="Konten Artikel"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="admin-textarea"
                    />
                    <button onClick={handleAddArticle} className="admin-button">
                        {editId !== null ? 'Update Artikel' : 'Tambah Artikel'}
                    </button>
                </section>
                <section className="Admin-section">
                    <h2>Daftar Artikel</h2>
                    <ul className="admin-list">
                        {articles.map((article) => (
                            <li key={article.id} className="admin-list-item">
                                <h3>{article.title}</h3>
                                <p>{article.content}</p>
                                <button
                                    onClick={() => handleEditArticle(article.id)}
                                    className="admin-button edit"
                                >
                                    Edit
                                    <button
                                        onClick={() => handleDeleteArticle(article.id)}
                                        className="admin-button delete"
                                    >
                                        Hapus
                                    </button>
                            </li>
                        ))}
                    </ul>
                </section>

            </main>
        </div>

    );
};

export default Admin;