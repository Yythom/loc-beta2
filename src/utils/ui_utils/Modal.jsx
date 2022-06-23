import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom'

const customStyles = {
    overlay: {
        background: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        minWidth: '500px',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '30px 14px 8px 14px',
        background: 'var(--color)',
        border: 'none',
        borderRadius: '18px',
    },
};

Modal.setAppElement('#root');
function CoutomModal({ children, elem }) {
    const [modalIsOpen, setIsOpen] = React.useState(true);
    function closeModal() {
        setIsOpen(false)
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(elem)
        }, 200);
    }

    return (
        <Modal
            closeTimeoutMS={600}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            {children}
        </Modal>
    );
}

export default CoutomModal