import css from './ImageModal.module.css';
//npm install react-modal
import Modal from 'react-modal';
Modal.setAppElement('#root');

const ImageModal = ({
  isOpen,
  onRequestClose,
  imageUrl,
  imageAlt,
  likes,
  author,
  description,
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      overflow: 'auto', // allow scrolling
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <img src={imageUrl} alt={imageAlt} />
      <div className={css.describe}>
        <p>
          <b>author:</b> {author}
        </p>
        <p>
          <b>likes:</b> {likes}
        </p>
        <p>
          <b>description:</b> {description}
        </p>
      </div>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;