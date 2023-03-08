import { MdOutlineAdd, MdClose, MdAttachMoney, MdFamilyRestroom, MdMedicalServices } from "react-icons/md";
import styles from './AddCard.module.css'
import ReactModal from "react-modal";
import { useContext, useState } from "react";
import { MethaContext } from "../../context/MethaContext";
import { useParams } from "react-router-dom";

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
    const [metha, setMetha] = useState('')
    const [categoryMetha, setCategoryMetha] = useState('Dinheiro')
    const { id } = useParams()

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const { saveMetha } = useContext(MethaContext)


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
                <form onSubmit={(e) => {
                    e.preventDefault()
                    saveMetha({
                        id: id,
                        title: metha,
                        category: categoryMetha
                    })
                    setMetha("")
                }}>
                    <div className={styles.add_category}>
                        <div className={styles.card_close}>
                            <MdClose onClick={closeModal} />
                        </div>
                        <h2>De qual metha estamos falando?</h2>
                        <div className={styles.card_modal_select_category}>
                            <div className={styles.text_modal_select}>
                                <input type="text" value={metha} name="metha" id="metha" onChange={(e => setMetha(e.target.value))} />
                            </div>
                            <div className={styles.contaier_category_card}>
                                <select name="select-category"
                                    defaultValue={categoryMetha}
                                    onChange={e => setCategoryMetha(e.target.value)}
                                    className={styles.contaier_category_select}>
                                    <option value="Dinheiro">Dinheiro </option>
                                    <option value="Familia">Familia</option>
                                    <option value="Saúde">Saude</option>
                                    <option value="Outros">Outros</option>
                                </select>
                            </div>
                            <div className={styles.card_category_selection_button}>
                                <input type="submit" value="Criar Metha" />
                            </div>
                        </div>
                    </div>
                </form>
            </ReactModal>
        </div>
    );
}
