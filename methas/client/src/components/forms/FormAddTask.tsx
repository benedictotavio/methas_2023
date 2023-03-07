import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MethaContext } from '../../context/MethaContext';
import api from '../../utils/api';
import CardItems from '../items/CardItems';
import styles from './LoginForm.module.css'

export interface ITaskFormProps {
    btnText: string,
    category: string,
    allMetha: {}[]
}



export default function FormAddTask({ btnText, category, allMetha }: ITaskFormProps) {

    const [metha, setMetha] = useState('')
    const [isUpdate, setUpdate] = useState(false)

    const { addMetha, removeMetha } = useContext(MethaContext)

    const { id } = useParams()

    const completeMetha = async (id: string) => {
        try {
            await api.post('/api/metha/complete', {
                metha_id: id
            })
        } catch (error) {
            window.alert(error)
        }
        setUpdate(!isUpdate)
    }

    const uncompleteMetha = async (id: string) => {
        try {
            await api.post('/api/metha/uncomplete', {
                metha_id: id
            })

        } catch (error) {
            window.alert(error)
        }
        setUpdate(!isUpdate)
    }


    const saveMethas = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try {
            if (metha) {
                addMetha({
                    id: id,
                    category: category,
                    title: metha
                })
            } else {
                window.alert('Adicione a metha!')
            }
            setMetha('')
        } catch (error) {
            window.alert(error)
        }
    }

    const deleteMetha = async (id: string) => {
        try {
            removeMetha(id)
            setUpdate(!isUpdate)
        } catch (error) {
            window.alert(error)
        }
    }

    return (
        <div>
            <form className={styles.form_login} onSubmit={saveMethas}>
                <div className={styles.form_task_add_container}>
                    <label htmlFor="metha"></label>
                    <input type="text" name='addMetha' value={metha} onChange={e => setMetha(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value={btnText} />
                </div>
            </form>
            <CardItems
                color='#ccd5ae'
                methas={allMetha}
                category={category}
                deleteMetha={deleteMetha}
                doneMetha={completeMetha}
                notDoneMetha={uncompleteMetha} />
        </div>
    );
}