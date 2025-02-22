import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ElevesPage = () => {
    const [eleves, setEleves] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEleves = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const response = await axios.get('http://127.0.0.1:8000/eleves/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setEleves(response.data);
            } catch (err) {
                setError('Impossible de récupérer les élèves.');
            }
        };
        fetchEleves();
    }, []);

    const updateNote = async (id, newNote) => {
        try {
            const token = localStorage.getItem('accessToken');
            await axios.put(
                `http://127.0.0.1:8000/eleves/${id}/`,
                { note: newNote },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert('Note mise à jour avec succès');
        } catch (err) {
            alert('Erreur lors de la mise à jour de la note');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Gestion des Élèves</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Matricule</th>
                        <th>Classe</th>
                        <th>Matière</th>
                        <th>Note</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {eleves.map((eleve) => (
                        <tr key={eleve.id} style={{ borderBottom: '1px solid #ccc' }}>
                            <td>{eleve.nom}</td>
                            <td>{eleve.matricule}</td>
                            <td>{eleve.classe}</td>
                            <td>{eleve.matiere}</td>
                            <td>{eleve.note}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        const newNote = prompt('Entrez la nouvelle note :', eleve.note);
                                        if (newNote) updateNote(eleve.id, newNote);
                                    }}
                                    style={{
                                        padding: '5px 10px',
                                        backgroundColor: '#28a745',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Modifier
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ElevesPage;
