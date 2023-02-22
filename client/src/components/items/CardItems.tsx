import style from './CardItems.module.css'
import { FaTrash, FaEdit } from 'react-icons/fa'

export interface ICardItemsProps {
  color: string
}

export default function CardItems({ color }: ICardItemsProps) {
  return (
    <div style={{ backgroundColor: color }} className={style.item_card_task}>
      <div className={style.item_card_icon_task}>
        <input type="checkbox" name="" id="" />
      </div>
      <div className={style.item_card_text_task}>
        <h3>
          New job!
        </h3>
      </div>
      <div className={style.item_card_action_task}>
        <div>
          <i><FaEdit /></i>
          <i><FaTrash /></i>
        </div>
      </div>
    </div>
  );
}
