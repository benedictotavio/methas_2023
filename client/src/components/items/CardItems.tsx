import style from './CardItems.module.css'
import { GrClose } from 'react-icons/gr'
import { DOMAttributes, MouseEventHandler } from 'react';

export interface ICardItemsProps {
  color: string,
  methas: objectMethas[] | object[] | any,
  category: string,
  deleteMetha: (id: string) => Promise<void> | MouseEventHandler<HTMLElement>
}

interface objectMethas {
  _id: string,
  category: string
  done: true
  title: string
}


export default function CardItems({ color, methas, category, deleteMetha }: ICardItemsProps) {

  const methasCategory = methas.filter((metha: { category: string }) => metha.category === category.toUpperCase())

  return (
    <div style={{ backgroundColor: color }} className={style.item_card_task}>
      {
        methasCategory.map((metha: objectMethas, index: number) => {
          return (
            <>
              <div key={index} className={style.item_card_icon_task}>
                <input type="checkbox" name="" id="" />
              </div>
              <div className={style.item_card_text_task}>
                <h3>
                  {metha.title}
                </h3>
              </div><div className={style.item_card_action_task}>
                <div>
                  <button onClick={() => {
                    deleteMetha(metha._id)
                    console.log(metha.title)
                  }}>
                    <i><GrClose /></i>
                  </button>
                </div>
              </div>
            </>
          )
        }

        )
      }
    </div>
  );
}
