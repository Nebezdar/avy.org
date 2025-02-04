import { Modal, ModalContent, ModalActions } from './styles';

const LimitModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Modal>
      <ModalContent>
        <h3>Download Limit Reached</h3>
        <p>
          You have reached your daily download limit of 3 models. 
          To download more models, please sign in or create an account.
        </p>
        <ModalActions>
          <button onClick={() => navigate('/login')}>Sign In</button>
          <button onClick={() => navigate('/register')}>Create Account</button>
          <button onClick={onClose}>Close</button>
        </ModalActions>
      </ModalContent>
    </Modal>
  );
}; 