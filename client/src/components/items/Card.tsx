import { useContext, useEffect, useState } from "react";
import style from "./Card.module.css";
import Modal from "react-modal";
import FormAddTask from "../forms/FormAddTask";
import { GrClose } from "react-icons/gr";
import { MdAttachMoney, MdFamilyRestroom } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router-dom";
import { MethaContext } from "../../context/MethaContext";

export interface ICardProps {
  text: string;
  icon: "money" | "health" | "family";
  category: string;
  colorIcon: string;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100vh",
    height: "75vh",
  },
};

Modal.setAppElement("#root");

const Card = ({ text, icon, category, colorIcon }: ICardProps) => {
  const { id } = useParams();
  const [allMethas, setAllMethas] = useState<any>([]);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { allMetha, saveMetha, update } = useContext(MethaContext);

  useEffect(() => {
    getAllMetha(id);
  }, [modalIsOpen, update]);

  const getAllMetha = async (id: string | undefined) => {
    allMetha({ id }).then((res) => setAllMethas(res));
  };

  const addMetha = (metha: string) => {
    try {
      saveMetha({
        id,
        title: metha,
        category: category.toUpperCase(),
      });
    } catch (error) {
      window.alert("error");
    }
  };

  const methasByCategory = allMethas.filter(
    (metha: { category: string }) => metha.category === category.toUpperCase()
  );

  const doneMethasbyCategory = methasByCategory.filter(
    (metha: { done: boolean }) => metha.done === true
  );

  let valueProgressbar =
    (100 * doneMethasbyCategory.length) / methasByCategory.length;

  return (
    <>
      <div className={style.card}>
        <div className={style.box}>
          <div className={style.content}>
            <h2>
              {icon === "money" ? (
                <MdAttachMoney fontSize="1.5em" color={colorIcon} />
              ) : icon === "health" ? (
                <CgGym fontSize="1.5em" color={colorIcon} />
              ) : (
                <MdFamilyRestroom fontSize="1.5em" color={colorIcon} />
              )}
            </h2>
            <h3>{category}</h3>
            <p>{text}</p>
            <button onClick={openModal}>Veja suas metas</button>
            <div className={style.progressbar_area}>
              <CircularProgressbar
                value={Number.isNaN(valueProgressbar) ? 0 : valueProgressbar}
                styles={{
                  // Customize the root svg element
                  root: {},
                  // Customize the path, i.e. the "completed progress"
                  path: {
                    // Path color
                    stroke: colorIcon,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "revert-layer",
                    // Customize transition animation
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    // Rotate the path
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: "#d6d6d6",
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "butt",
                    // Rotate the trail
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  // Customize the text
                  text: {
                    // Text color
                    fill: "#f88",
                    // Text size
                    fontSize: "16px",
                  },
                  // Customize background - only used when the `background` prop is true
                  background: {
                    fill: "#3e98c7",
                  },
                }}
              />
            </div>
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
              <button onClick={closeModal}>
                <GrClose />
              </button>
            </div>
            <div>
              <FormAddTask
                btnText="Adicionar metha"
                save={addMetha}
                allMetha={methasByCategory}
              />
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Card;
