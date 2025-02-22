import welcome from '../assets/images/welcome.jpg';
import Tonye from '../assets/images/tonye.jpg';
import infrastructureImage from '../assets/images/infrastructure.jpg';
import kiboum from '../assets/images/kiboum.jpg';
import Tabouguia from '../assets/images/taboukia.jpg';
import resultImage from '../assets/images/result.jpg';
import contactImage from '../assets/images/contact.jpg';
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMedal, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FaPlus, FaMinus } from "react-icons/fa";



const features = [
    {
        title: "Infrastructures modernes",
        description: "Découvrez nos installations modernes, conçues pour favoriser l'apprentissage.",
        link: "/infrastructures",
        image: infrastructureImage,
    },
    {
        title: "Résultats des examens",
        description: "Nos élèves se démarquent aux examens nationaux avec des performances exceptionnelles.",
        link: "/resultats",
        image: resultImage,
    },
    {
        title: "Contactez-nous",
        description: "Vous avez des questions ? Contactez-nous ou envoyez-nous un message WhatsApp.",
        link: "/contact",
        image: contactImage,
    },
];

const testimonials = [
    { name: "Frida evelyne", text: "L'École Nolanga a transformé l'éducation de notre fils. Merci !" },
    { name: "Silas J.", text: "Un environnement stimulant et bienveillant." },
    { name: "Patou J.", text: "Je recommande vivement cette école pour son engagement envers la réussite des élèves." },
];

const stats = [
    { label: "Élèves inscrits", value: "350+", icon: faUsers },
    { label: "Taux de réussite", value: "98%", icon: faMedal },
    { label: "Année de création", value: "1995", icon: faCalendarAlt },
];

const programs = [
    {
        subject: "Mathématiques",
        description: "Approche innovante pour développer les compétences analytiques.",
        icon: "📊", 
    },
    {
        subject: "Sciences",
        description: "Laboratoires bien équipés pour des expériences pratiques.",
        icon: "🔬",
    },
    {
        subject: "Langues",
        description: "Cours de français, anglais et espagnol avec des professeurs qualifiés.",
        icon: "🗣️",
    },
];


const staff = [
    {
        name: "Mme Tabouguia",
        role: "Directrice",
        bio: "20 ans d'expérience dans l'éducation.",
        image: kiboum,
    },
    {
        name: "M. Tonye",
        role: "Professeur de Mathématiques",
        bio: "Spécialiste des méthodes interactives.",
        image: Tonye,
    },
    {
        name: "Mme Kiboum",
        role: "Responsable pédagogique",
        bio: "Accompagne les élèves vers la réussite.",
        image: Tabouguia,
    },
];



const faq = [
    {
        question: "Comment inscrire mon enfant ?",
        answer: "Remplissez le formulaire en ligne ou contactez notre bureau administratif.",
    },
    {
        question: "Quelles activités parascolaires proposez-vous ?",
        answer: "Nous proposons des clubs de sport, de musique, et des ateliers scientifiques.",
    },
    {
        question: "Quels sont vos horaires ?",
        answer: "Du lundi au vendredi, de 8h00 à 16h00.",
    },
];

const newsAndEvents = [
    { title: "Journée portes ouvertes", date: "15 janvier 2024", description: "Venez découvrir notre école et rencontrer nos enseignants." },
    { title: "Concours de Mathématiques", date: "20 mars 2024", description: "Nos élèves participeront au concours national." },
    { title: "Sortie scolaire au musée", date: "5 mai 2024", description: "Visite éducative au musée des sciences." },
];

const styles = {
    container: { padding: '20px', margin: '40px 0' },
    hero: {
        backgroundImage: `url(${welcome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
    },
    heroButton: {
        marginTop: '20px',
        padding: '10px 30px',
        fontSize: '1.2em',
        color: 'white',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
    },
    card: {
        width: '300px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        marginBottom: '20px',
    },
    testimonialsContainer: { padding: '20px', textAlign: 'center' },
    testimonials: { display: 'flex', justifyContent: 'center', gap: '20px',flexWrap: 'wrap', },
    '@media (max-width: 768px)': {
        testimonials: {
            flexDirection: 'column', // Les témoignages s'empilent verticalement
            alignItems: 'center',
        },
    },
    quickInfoContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '40px 20px',
        backgroundColor: '#007bff',
        color: 'white',
    },
    faqContainer: { maxWidth: '800px', margin: '0 auto', padding: '20px' },
    faqItem: { marginBottom: '15px', cursor: 'pointer' },
    // container: {
    //     padding: '40px 20px',
    //     marginBottom: '40px',
    //     textAlign: 'center',
    // },
    // sectionTitle: {
    //     fontSize: '2em',
    //     fontWeight: 'bold',
    //     marginBottom: '20px',
    // },
    // sectionGrid: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     justifyContent: 'center',
    //     gap: '20px',
    // },
    // card: {
    //     width: '300px',
    //     backgroundColor: '#f9f9f9',
    //     borderRadius: '8px',
    //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    //     padding: '20px',
    //     textAlign: 'left',
    //     transition: 'transform 0.2s, box-shadow 0.2s',
    // },
    // cardHover: {
    //     transform: 'scale(1.05)',
    //     boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
    // },
    // cardImage: {
    //     width: '100%',
    //     height: '150px',
    //     objectFit: 'cover',
    //     borderRadius: '8px',
    //     marginBottom: '15px',
    // },
    // cardTitle: {
    //     fontSize: '1.2em',
    //     fontWeight: 'bold',
    //     marginBottom: '10px',
    // },
    // cardDescription: {
    //     fontSize: '1em',
    //     color: '#666',
    // },
};


const NewsAndEventsSection = () => {
    const newsStyles = {
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
    };

    return (
        <div style={newsStyles.container}>
            <h2>Actualités et événements</h2>
            <br></br>
            <div style={newsStyles.cardContainer}>
                {newsAndEvents.map((event, index) => (
                    <div key={index} style={newsStyles.card}>
                        <h3>{event.title}</h3>
                        <p><strong>Date:</strong> {event.date}</p>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProgramSection = () => {
    const cardAnimationStyles = {
        container: {
            padding: '20px',
            textAlign: 'center',
        },
        card: {
            backgroundColor: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '25px',
            margin: '10px auto',
            maxWidth: '400px',
            textAlign: 'left',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Animation
        },
        cardHover: {
            transform: 'scale(1.05)', // Zoom sur la carte
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Ombre plus marquée
        },
        icon: {
            fontSize: '2rem',
        },
        textContainer: {
            flex: 1,
        },
    };
    

    return (
        <div style={cardAnimationStyles.container}>
            <h2>Programme éducatif</h2> 
            <br></br>
            {programs.map((program, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 1, opacity: 0.8 }}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={cardAnimationStyles.card}
                >
                    <div style={cardAnimationStyles.icon}>{program.icon}</div>
                    <div style={cardAnimationStyles.textContainer}>
                        <h3>{program.subject}</h3>
                        <p>{program.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};


const staffSectionStyles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
    gridContainer: {
        display: 'flex', // Utilisation de Flexbox
        flexWrap: 'wrap', // Permet de revenir à la ligne si nécessaire
        justifyContent: 'center', // Centrage horizontal
        gap: '40px', // Espacement entre les cartes
    },
    card: {
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        width: '250px', // Taille fixe pour les cartes
        textAlign: 'left',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Animation
    },
    cardHover: {
        transform: 'scale(1.05)', // Zoom sur la carte
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Ombre plus marquée
    },
    image: {
        width: '100%', // L'image prend toute la largeur de la carte
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '10px',
    },
};

const StaffSection = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    return (
        <div style={staffSectionStyles.container}>
            <h2>Équipe pédagogique</h2>
            <br></br>
            <div style={staffSectionStyles.gridContainer}>
                {staff.map((member, index) => (
                    <div
                        key={index}
                        style={{
                            ...staffSectionStyles.card,
                            ...(hoveredIndex === index ? staffSectionStyles.cardHover : {}),
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img
                            src={member.image} // Assurez-vous que chaque prof a une image associée
                            alt={member.name}
                            style={staffSectionStyles.image}
                        />
                        <h3>{member.name}</h3>
                        <p><strong>{member.role}</strong></p>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


const AdmissionSection = () => {
    const admissionStyles = {
        container: {
            padding: '40px',
            textAlign: 'center',
            backgroundColor: '#f5f7fa', // Couleur d'arrière-plan douce
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '800px',
            margin: 'auto', // Centrage horizontal
        },
        heading: {
            fontSize: '2em',
            color: '#2c3e50',
            marginBottom: '20px',
        },
        text: {
            fontSize: '1.2em',
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '30px',
        },
        stepsContainer: {
            textAlign: 'left',
            margin: '20px auto',
            maxWidth: '600px',
        },
        step: {
            marginBottom: '15px',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        },
        stepNumber: {
            fontWeight: 'bold',
            fontSize: '1.2em',
            color: '#007bff',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
        },
        button: {
            padding: '10px 20px',
            fontSize: '1em',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
    };

    const [hoveredButton, setHoveredButton] = React.useState(null);

    const steps = [
        { number: 1, text: "Remplir le formulaire d'inscription en ligne ou en présentiel." },
        { number: 2, text: "Fournir les documents requis (bulletins, certificat de naissance, etc.)." },
        { number: 3, text: "Passer un entretien avec les parents et/ou l'élève." },
        { number: 4, text: "Recevoir une confirmation d'inscription après validation." },
        { number: 5, text: "Finaliser le paiement des frais d'inscription." },
    ];

    return (
        <div style={admissionStyles.container}>
            <h2 style={admissionStyles.heading}>Admissions</h2>
            <p style={admissionStyles.text}>
                Rejoignez notre école ! Inscrivez votre enfant dès aujourd'hui et donnez-lui les moyens de réussir.
                Visitez notre page d'admission pour plus d'informations et découvrez comment nous aidons nos élèves à atteindre leur plein potentiel.
            </p>
            <div style={admissionStyles.stepsContainer}>
                <h3>Étapes du processus d'admission :</h3>
                {steps.map((step, index) => (
                    <div key={index} style={admissionStyles.step}>
                        <span style={admissionStyles.stepNumber}>Étape {step.number}:</span> {step.text}
                    </div>
                ))}
            </div>
            <div style={admissionStyles.buttonContainer}>
                <button
                    style={{
                        ...admissionStyles.button,
                        ...(hoveredButton === 'inscription' ? admissionStyles.buttonHover : {}),
                    }}
                    onMouseEnter={() => setHoveredButton('inscription')}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => window.location.href = '/inscription'}
                >
                    Formulaire d'inscription
                </button>
                <button
                    style={{
                        ...admissionStyles.button,
                        ...(hoveredButton === 'details' ? admissionStyles.buttonHover : {}),
                    }}
                    onMouseEnter={() => setHoveredButton('details')}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => window.location.href = '/admissions-details'}
                >
                    En savoir plus
                </button>
            </div>
        </div>
    );
};



const FAQSection = () => {
    const faqStyles = {
        container: {
            padding: '40px',
            maxWidth: '800px',
            margin: 'auto',
            backgroundColor: '#f5f7fa',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        heading: {
            textAlign: 'center',
            fontSize: '2em',
            color: '#2c3e50',
            marginBottom: '20px',
        },
        faqItem: {
            marginBottom: '15px',
            padding: '15px 20px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        question: {
            fontSize: '1.2em',
            color: '#007bff',
            fontWeight: 'bold',
            margin: 0,
            flex: '1',
        },
        icon: {
            fontSize: '1.5em',
            color: '#007bff',
            marginLeft: '10px',
            transition: 'transform 0.3s ease',
        },
        answerContainer: {
            overflow: 'hidden',
            transition: 'max-height 0.3s ease, padding 0.3s ease',
        },
        answer: {
            fontSize: '1em',
            color: '#555',
            lineHeight: '1.6',
            paddingTop: '10px',
        },
    };

    const [activeIndex, setActiveIndex] = React.useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div style={faqStyles.container}>
            <h2 style={faqStyles.heading}>FAQ</h2>
            {faq.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                    <div key={index}>
                        <div
                            style={{
                                ...faqStyles.faqItem,
                                boxShadow: isOpen ? '0 4px 8px rgba(0, 0, 0, 0.15)' : faqStyles.faqItem.boxShadow,
                            }}
                            onClick={() => handleToggle(index)}
                        >
                            <h3 style={faqStyles.question}>{item.question}</h3>
                            <div
                                style={{
                                    ...faqStyles.icon,
                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            >
                                {isOpen ? <FaMinus /> : <FaPlus />}
                            </div>
                        </div>
                        <div
                            style={{
                                ...faqStyles.answerContainer,
                                maxHeight: isOpen ? '200px' : '0px',
                                padding: isOpen ? '10px 15px' : '0 15px',
                            }}
                        >
                            <p style={faqStyles.answer}>{item.answer}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};





const QuickInfo = () => (
    <div style={styles.quickInfoContainer}>
        {stats.map((stat, index) => (
            <motion.div
                key={index}
                style={{ textAlign: 'center', flex: '1', minWidth: '150px', maxWidth: '200px' }}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <FontAwesomeIcon icon={stat.icon} style={{ fontSize: '2.5em', marginBottom: '10px' }} />
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
            </motion.div>
        ))}
    </div>
);

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div style={styles.hero}>
                <h1>Bienvenue à l'École Nolanga</h1>
                <p>Un lieu où chaque enfant découvre son potentiel et construit son avenir.</p>
                <motion.button
                    style={styles.heroButton}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    En savoir plus
                </motion.button>
            </div>

            {/* Features Section */}
            <div style={styles.container}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            style={styles.card}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={feature.image} alt={feature.title} style={{ width: '100%', borderRadius: '8px' }} />
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                            <a href={feature.link} style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Découvrir</a>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
<div style={styles.testimonialsContainer}>
    <h2>Ce que disent les parents</h2>
    <br />
    <div style={styles.testimonials}>
        {testimonials.map((testimonial, index) => (
            <motion.div
                key={index}
                style={{
                    maxWidth: '90%', // Prend la quasi-totalité de l'espace sur petits écrans
                    width: '300px', // Limite sur les grands écrans
                    padding: '20px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <p>"{testimonial.text}"</p>
                <h4>- {testimonial.name}</h4>
            </motion.div>
        ))}
    </div>
</div>

           

            {/* Sections supplémentaires */}
            <div>
                 
                <QuickInfo />
                <br></br>
                <NewsAndEventsSection />
                <br></br>
                <ProgramSection />
                <br></br>
                <StaffSection />
                <br></br>
                <AdmissionSection />
                <br></br>
                <FAQSection />
                <br></br>
            </div>
        </div>
    );
};

export default Home;
