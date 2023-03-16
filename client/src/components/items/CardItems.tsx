import { useContext } from 'react';
import { GrClose } from 'react-icons/gr'
import { MethaContext } from '../../context/MethaContext';
import styles from './CardItems.module.css'

interface objectMethas {
  title: string,
  id: string,
  done: boolean
}


export default function CardItems({ title, id, done }: objectMethas) {


  const { deleteMetha, doneMetha, notDoneMetha } = useContext(MethaContext)

  return (
    <div className={styles.item_card_task}>
      <div className={styles.check_card}>
        <label>
          {
            done === false ?
              <input type="checkbox" defaultChecked={false} onChange={() => doneMetha(id)} />
              :
              <input type="checkbox" defaultChecked={true} onChange={() => notDoneMetha(id)} />
          }
        </label>
      </div>
      <div className={styles.item_card_text_task}>
        <h3>
          {title}
        </h3>
      </div>

      <div className={styles.item_card_action_task}>
        <i>
          <GrClose onClick={() => deleteMetha(id)} />
        </i>
      </div>
    </div>
  );
}