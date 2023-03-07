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
        transform: 'translate(-50%, -50%)'
    },
};

ReactModal.setAppElement('#root')

export default function AddCard(props: IAddCardProps) {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [metha, setMetha] = useState('')
    const [selectCategory, setSelectCategory] = useState('')

    const { id } = useParams()
    const { addMetha } = useContext(MethaContext);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try {
            if (selectCategory) {
                addMetha({
                    category: selectCategory.toUpperCase(),
                    title: metha,
                    id: id
                })
            }else{
                window.alert('Adicione uma categoria para sua metha!')
            }
            setMetha('')
        } catch (error) {
            window.alert(error)
        }
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
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type="text" value={metha} onChange={e => setMetha(e.target.value)} />
                            </div>
                            <div>
                                <div className={styles.container_category_card}>
                                    <select value={selectCategory} name="select-category" className={styles.container_category_select} onChange={e => setSelectCategory(e.target.value)}>
                                        <option value="Dinheiro">Dinheiro </option>
                                        <option value="Familia">Familia</option>
                                        <option value="Saude">Saude</option>
                                    </select>
                                </div>
                                <div className={styles.card_category_selection_button}>
                                    <input type="submit" value="Criar metha" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}
