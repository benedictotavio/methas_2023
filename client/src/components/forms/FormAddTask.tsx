import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CardItems from '../items/CardItems';
import styles from './LoginForm.module.css'

interface ITaskFormProps {
    btnText: string,
    allMetha: {
        _id: string,
        title: string,
        done: boolean
    }[],
    save: (metha: string) => any,
}

export default function App({ btnText,allMetha,save }: ITaskFormProps) {
 
    const [metha, setMetha] = useState('')

    return (
        <div>
            <form className={styles.form_login} onSubmit={(e) => {
                e.preventDefault()
                save(metha)
            }}>
                <div className={styles.form_task_add_container}>
                    <label htmlFor="metha">
                    </label>
                    <input type="text" name='metha' value={metha} onChange={e => setMetha(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value={btnText} />
                </div>
            </form>
            <div>
                {

                    allMetha.map((item, indx) => (
                        <CardItems key={indx} title={item.title} id={item._id} done={item.done} />
                    ))

                }
            </div>
        </div>
    );
}