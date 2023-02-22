import { MdOutlineAdd, MdClose, MdAttachMoney, MdFamilyRestroom, MdMedicalServices } from "react-icons/md";
import styles from './AddCard.module.css'
import ReactModal from "react-modal";
import { useState } from "react";

export interface IAddCardProps {
}

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

ReactModal.setAppElement('#root')




export default function AddCard(props: IAddCardProps) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={styles.container_add_task_card}>
            <div className={styles.btn_add_task_card} onClick={openModal}>
                <i>
                    <MdOutlineAdd />
                </i>
                <h3>
                    Adicionar Metha
                </h3>
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="React Modal a add a card metha"
            >
                <div className={styles.add_category}>
                    <div className={styles.card_close}>
                        <MdClose onClick={closeModal} />
                    </div>
                    <h2>De qual metha estamos falando?</h2>
                    <div className={styles.card_modal_select_category}>
                        <div>
                            <div className={styles.contaier_category_card}>
                                <select name="select-category" className={styles.contaier_category_select}>
                                    <option value="money">Dinheiro </option>
                                    <option value="family">Familia</option>
                                    <option value="health">Saude</option>
                                    <option value="others">Outros</option>
                                </select>
                            </div>
                            <div className={styles.card_category_selection_button}>
                                <button>Criar metha</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}
