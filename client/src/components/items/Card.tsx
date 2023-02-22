import React, { useState } from 'react'
import style from './Card.module.css'
import Modal from 'react-modal'
import FormAddTask from '../forms/FormAddTask'
import { GrClose } from 'react-icons/gr'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '100vh',
        height: '75vh'
    },
};

Modal.setAppElement('#root');

const Card = () => {

    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className={style.card}>
                <div className={style.box}>
                    <div className={style.content}>
                        <h2>
                            Icon
                        </h2>
                        <h3>Dinheiro</h3>
                        <p>Faça o ano de {new Date().getFullYear()} ser o mais endireinhado da sua vida, hora de conseguir aquele dinheiro extra!</p>
                        <button onClick={openModal}>
                            Veja suas metas
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.modal_task}>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <div className={style.modal_form}>
                        <div className={style.modal_close}>
                            <button onClick={closeModal}><GrClose /></button>
                        </div>
                        <div>
                            <FormAddTask btnText='Adicionar metha' />
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Card