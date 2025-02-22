import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null); // 'success' or 'error'
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const formData = { nom, email, message };

    try {
      await axios.post("http://localhost:8000/api/envoyer_email/", formData);
      setStatusMessage("Votre message a été envoyé avec succès !");
      setStatusType("success");
      setNom("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatusMessage("Une erreur est survenue lors de l’envoi de votre message.");
      setStatusType("error");
    } finally {
      setIsSending(false);
      // Efface le message de statut après 5 secondes
      setTimeout(() => {
        setStatusMessage(null);
        setStatusType(null);
      }, 5000);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contactez-nous</h1>

      {statusMessage && (
        <div className={`status-message ${statusType}`}>
          {statusMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <label>Nom</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Votre nom"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          required
        />

        <label>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Votre message"
          required
        ></textarea>

        <button type="submit" className="submit-button" disabled={isSending}>
          {isSending ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>

      <div className="whatsapp-container">
        <button
          className="whatsapp-button"
          onClick={() => window.open("https://wa.me/+237675953123", "_blank")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
          Discuter sur WhatsApp
        </button>
      </div>

      <style jsx>{`
        .contact-container {
          max-width: 500px;
          margin: 40px auto;
          padding: 20px;
          background: linear-gradient(135deg, #f9f9f9, #e8e8e8);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          font-family: 'Roboto', sans-serif;
          animation: fadeIn 1s ease-in-out;
        }
        h1 {
          text-align: center;
          color: #007BFF;
          margin-bottom: 20px;
        }
        .status-message {
          padding: 10px;
          margin-bottom: 20px;
          border-radius: 4px;
          text-align: center;
          font-weight: bold;
          animation: fadeOut 5s forwards;
        }
        .status-message.success {
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        .status-message.error {
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        label {
          font-size: 14px;
          color: #555;
        }
        input,
        textarea {
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        input:focus,
        textarea:focus {
          border-color: #007BFF;
          outline: none;
          box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
        }
        textarea {
          height: 120px;
          resize: none;
        }
        .submit-button {
          padding: 12px;
          font-size: 16px;
          color: #fff;
          background: linear-gradient(45deg, #007BFF, #0056b3);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        .submit-button:disabled {
          background: #bbb;
          cursor: not-allowed;
        }
        .submit-button:hover:not(:disabled) {
          background: linear-gradient(45deg, #0056b3, #003f7f);
        }
        .whatsapp-container {
          margin-top: 20px;
          text-align: center;
        }
        .whatsapp-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px;
          font-size: 16px;
          color: #fff;
          background-color: #25D366;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .whatsapp-button:hover {
          background-color: #1da851;
        }
        .whatsapp-button img {
          width: 24px;
          height: 24px;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            opacity: 0;
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
