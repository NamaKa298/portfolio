import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

if (typeof window !== 'undefined') {
  Modal.setAppElement('body');
}
const ContactModal: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        onClick={openModal}
        className="flex absolute px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Ouvrir la modale
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal} // Ferme la modale en cliquant en dehors ou sur Échap
        style={customStyles}
        contentLabel="Contact Modal"
      >
        <h2>Contactez-nous</h2>
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Tapez votre message ici..."
        ></textarea>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Fermer
        </button>
      </Modal>
    </div>
  );
};

export default ContactModal;
