import style from './CardItems.module.css'
import { GrClose } from 'react-icons/gr'
import { DOMAttributes, MouseEventHandler } from 'react';

export interface ICardItemsProps {
  color: string,
  methas: objectMethas[] | object[] | any,
  category: string,
  deleteMetha: (id: string) => Promise<void> | MouseEventHandler<HTMLElement>,
  doneMetha: (id: string) => Promise<void>,
  notDoneMetha: (id: string) => Promise<void>
}

interface objectMethas {
  _id: string,
  category: string
  done: boolean
  title: string
}


export default function CardItems({ color, methas, category, deleteMetha, doneMetha, notDoneMetha }: ICardItemsProps) {

  const methasCategory = methas.filter((metha: { category: string }) => metha.category === category.toUpperCase())

  return (
    <>
      {
        methasCategory.map((metha: objectMethas, index: number) => (
          <>
            <div style={{ backgroundColor: color }} className={style.item_card_task} key={index + '_' + metha._id}>
              {
                metha.done === false ?
                  <div className={style.item_card_icon_task}>
                    <label>
                      <input type="checkbox" defaultChecked={false} onChange={() => doneMetha(metha._id)} />
                    </label>
                  </div>
                  :
                  <div className={style.item_card_icon_task}>
                    <label>
                      <input type="checkbox" defaultChecked={true} onChange={() => notDoneMetha(metha._id)} />
                    </label>
                  </div>
              }
              <div key={index + '_' + metha._id} className={style.item_card_text_task}>
                <h3>
                  {metha.title}
                </h3>
              </div><div className={style.item_card_action_task}>
                <div>
                  <i onClick={() => deleteMetha(metha._id)}><GrClose /></i>
                </div>
              </div>
            </div>
          </>
        )
        )
      }
    </>
  );
}
