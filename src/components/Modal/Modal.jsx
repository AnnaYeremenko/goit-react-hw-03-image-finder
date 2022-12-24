import propTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg  } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ src, onClose }) => 
createPortal(
    <Overlay onClick={onClose}>
        <ModalImg>
            Picture 
            <img src={src} alt="" />
        </ModalImg>
    </Overlay>,
    modalRoot
);

Modal.propTypes = {
    src: propTypes.string.isRequired,
    onClose: propTypes.func.isRequired,
};
