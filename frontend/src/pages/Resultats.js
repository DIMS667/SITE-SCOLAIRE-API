import React from 'react';

const Resultats = () => {
    const resultats = {
        "3ème": [
            { id: 1, nom: "tchana", prenom: "dylan", examen: "BEPC", reussi: true },
            { id: 2, nom: "tchientcheu", prenom: "emmanuel", examen: "BEPC", reussi: false },
            { id: 3, nom: "nyobe", prenom: "eli", examen: "BEPC", reussi: true },
            { id: 4, nom: "jimogna", prenom: "thayir", examen: "BEPC", reussi: false },
        ],
        "1ère": [
            { id: 5, nom: "fomekong", prenom: "benard", examen: "Probatoire", reussi: true },
            { id: 6, nom: "um", prenom: "junior", examen: "Probatoire", reussi: true },
            { id: 7, nom: "ngo bandje", prenom: "Géraldine", examen: "Probatoire", reussi: false },
        ],
        "Terminale": [
            { id: 8, nom: "nzie", prenom: "rose", examen: "BAC", reussi: true },
            { id: 9, nom: "booba", prenom: "Lucas", examen: "BAC", reussi: false },
            { id: 10, nom: "kaaris", prenom: "armand", examen: "BAC", reussi: true },
        ],
    };

    return (
        <div className="resultats-container">
            <h1>Résultats des Élèves</h1>

            <p className="legend">
                <span className="blue">●</span> Réussi &nbsp;|&nbsp; 
                <span className="red">●</span> Échec
            </p>

            {Object.entries(resultats).map(([classe, eleves]) => (
                <div key={classe}>
                    <h2>{classe} - Examen {eleves[0]?.examen}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Examen</th>
                                <th>Réussi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eleves.map((eleve) => (
                                <tr key={eleve.id} className={eleve.reussi ? "reussi" : "echec"}>
                                    <td>{eleve.nom}</td>
                                    <td>{eleve.prenom}</td>
                                    <td>{eleve.examen}</td>
                                    <td>{eleve.reussi ? "Oui" : "Non"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}

            <style jsx>{`
                .resultats-container {
                    margin: 20px;
                    font-family: Arial, sans-serif;
                }
                h1 {
                    text-align: center;
                    color: #0277BD; /* Bleu primaire */
                    margin-bottom: 20px;
                }
                h2 {
                    margin-top: 30px;
                    color: #01579B; /* Bleu plus foncé */
                }
                .legend {
                    text-align: center;
                    margin-bottom: 20px;
                    font-size: 16px;
                }
                .legend span {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    margin-right: 5px;
                }
                .legend .blue {
                    background-color: #0288D1;
                }
                .legend .red {
                    background-color: #D32F2F;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    border-radius: 10px;
                    overflow: hidden;
                }
                th, td {
                    padding: 15px;
                    text-align: left;
                    font-size: 14px;
                }
                th {
                    background-color: #0288D1; /* Bleu */
                    color: white;
                }
                tr:nth-child(even) {
                    background-color: #f9f9f9;
                }
                tr:hover {
                    background-color: #f1f1f1;
                }
                .reussi td {
                    color: #0277BD; /* Bleu pour succès */
                    font-weight: bold;
                }
                .echec td {
                    color: #D32F2F; /* Rouge pour échec */
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};

export default Resultats;
