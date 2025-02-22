import React from 'react';
import bibliotheque from '../assets/images/bibliotheque.jpg';
import terrain from '../assets/images/terrain.jpg';
import informatique from '../assets/images/informatique.jpg';
import imprimante from '../assets/images/imprimante.jpg';
import tableau from '../assets/images/tableau.jpg';
import laboratoire from '../assets/images/laboratoire.jpg';
import univer from '../assets/images/univer.jpg';
import univers from '../assets/images/univers.jpg';
import harvard from '../assets/images/harvard.jpg';


import etudiant1 from '../assets/images/etudiant1.jpg';
import etudiant2 from '../assets/images/etudiant2.jpg';
import etudiant3 from '../assets/images/etudiant3.jpg';
// import partenaire2 from '../assets/images/partenaire2.jpg';
// import partenaire3 from '../assets/images/partenaire3.jpg';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const Infrastructures = () => {
//     return (
//         <div>
//             <h1>Nos Infrastructures</h1>
//             <p>Découvrez nos bâtiments, nos laboratoires et autres équipements scolaires.</p>
//         </div>
//     );
// };

// export default Infrastructures;



import { FaBook, FaDesktop, FaFutbol } from 'react-icons/fa';

const infrastructuresData = [
    {
        id: 1,
        nom: "Bibliothèque",
        icon: <FaBook />, // Icône pour la bibliothèque
        description: "Une salle richement fournie avec des livres adaptés à chaque âge.",
    },
    {
        id: 2,
        nom: "Laboratoire Informatique",
        icon: <FaDesktop />, // Icône pour le laboratoire informatique
        description: "Des ordinateurs modernes pour apprendre les nouvelles technologies.",
    },
    {
        id: 3,
        nom: "Terrain de Sport",
        icon: <FaFutbol />, // Icône pour le terrain de sport
        description: "Un grand espace pour pratiquer différents sports et activités physiques.",
    },
];


const carrouselImages = [
    bibliotheque,
    informatique,
    terrain
    
];


const CarrouselInfrastructures = ({ images }) => {
    const imageStyles = {
        width: '100%',
        height: '400px',
        objectFit: 'cover',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            {/* <h2>Carrousel d'Infrastructures</h2> */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{
                    delay: 3000, // Temps en millisecondes avant le défilement
                    disableOnInteraction: false, // Continue après une interaction utilisateur
                }}
                loop
                modules={[Navigation, Pagination, Autoplay]} // Ajout du module Autoplay
                style={{ width: '100%' }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Infrastructure ${index}`}
                            style={imageStyles}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


const CartesInfrastructures = ({ infrastructures }) => {
    const styles = {
        container: {
            padding: '20px',
            textAlign: 'center',
        },
        card: {
            backgroundColor: '#ffffff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            width: '300px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
        },
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
        },
        icon: {
            fontSize: '50px',
            color: '#007bff',
            marginBottom: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <h2>Nos Infrastructures</h2>
            <br />
            <div style={styles.cardContainer}>
                {infrastructures.map((infra, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.icon}>{infra.icon}</div>
                        <h3>{infra.nom}</h3>
                        <p>{infra.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


// equipements

const equipementsData = [
    {
        id: 1,
        nom: "Imprimante 3D",
        image: imprimante,
        description: "Permet de concevoir et imprimer des prototypes innovants.",
    },
    {
        id: 2,
        nom: "Tableau Interactif",
        image: tableau,
        description: "Pour des cours dynamiques et interactifs.",
    },
    {
        id: 3,
        nom: "Laboratoire de Sciences",
        image: laboratoire,
        description: "Un espace équipé pour les expériences scientifiques.",
    },
];



const EquipementsSection = ({ equipements }) => {
    const styles = {
        container: {
            padding: '20px',
            textAlign: 'center',
        },
        card: {
            backgroundColor: '#ffffff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            width: '300px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'left',
        },
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
        },
        image: {
            width: '100%',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '8px',
        },
    };

    return (
        <div style={styles.container}>
            <h2>Équipements Modernes</h2>
            <br />
            <div style={styles.cardContainer}>
                {equipements.map((equipement, index) => (
                    <div key={index} style={styles.card}>
                        <img
                            src={equipement.image}
                            alt={equipement.nom}
                            style={styles.image}
                        />
                        <h3>{equipement.nom}</h3>
                        <p>{equipement.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
// equipements

//Nos Partenaires

const partenairesLogos = [
    univer,
    univers,
    harvard,
    univer,
    univers,
    harvard,
    univer,
    univers,
    harvard,
    univer,
    univers,
    harvard,
    
];


const PartenairesCarrousel = ({ logos }) => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Nos Partenaires</h2>
            <br></br>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2500, // Définit l'intervalle en ms
                    disableOnInteraction: false, // Continue après interaction
                    pauseOnMouseEnter: false, // Ne s'arrête pas au survol
                }}
                modules={[Autoplay]}
                style={{ width: '100%' }}
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={logo}
                            alt={`Partenaire ${index}`}
                            style={{
                                width: '100%',
                                height: '100px',
                                objectFit: 'contain',
                                margin: 'auto',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


//Nos Partenaires

//avis des eyudiant

const avisEtudiants = [
    {
        id: 1,
        nom: "Walter O'Brien",
        commentaire: "Les infrastructures modernes m'aident à mieux apprendre.",
        photo: etudiant1,
    },
    {
        id: 2,
        nom: "Marie Curie",
        commentaire: "Le terrain de sport est idéal pour se détendre après les cours.",
        photo: etudiant2,
    },
    {
        id: 3,
        nom: "Albert Einstein",
        commentaire: "Le laboratoire d'informatique est très bien équipé.",
        photo: etudiant3,
    },
];


const AvisSection = ({ avis }) => {
    const styles = {
        container: {
            padding: '20px',
            textAlign: 'center',
        },
        avisCard: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            width: '300px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'left',
        },
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
        },
        photo: {
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            marginBottom: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <h2>Avis des Étudiants</h2>
            <br />
            <div style={styles.cardContainer}>
                {avis.map((etudiant, index) => (
                    <div key={index} style={styles.avisCard}>
                        <img
                            src={etudiant.photo}
                            alt={etudiant.nom}
                            style={styles.photo}
                        />
                        <h4>{etudiant.nom}</h4>
                        <p>"{etudiant.commentaire}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

//etudiant
const Infrastructures = () => {
    return (
        <div>
            <CarrouselInfrastructures images={carrouselImages} />
            <br></br>
            <CartesInfrastructures infrastructures={infrastructuresData} />
            <br></br>
            <EquipementsSection equipements={equipementsData} />
            <br></br>
            <PartenairesCarrousel logos={partenairesLogos} />
            <br></br>
            <AvisSection avis={avisEtudiants} />
        </div>
    );
};

export default Infrastructures;