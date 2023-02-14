import React, { useState } from 'react'
import style from './Card.module.css'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width:'100vh',
        height:'80vh'
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
            <div className={style.card_container}>
                <div className={style.container}>
                    <div className={style.card}>
                        <div className={style.box}>
                            <div className={style.content}>
                                <h2>
                                    Icon
                                </h2>
                                <h3>Dinheiro</h3>
                                <p>Faça o ano de {'--ano--'} ser o mais endireinhado da sua vida, hora de conseguir aquele dinheiro extra!</p>
                                <button onClick={openModal}>
                                    Veja suas metas
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </div>
        </>
    )
}

export default Card