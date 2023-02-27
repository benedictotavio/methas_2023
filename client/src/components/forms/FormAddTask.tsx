import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/api';
import CardItems from '../items/CardItems';
import styles from './LoginForm.module.css'

export interface ITaskFormProps {
    btnText: string,
    category: string
}



export default function App({ btnText, category }: ITaskFormProps) {

    const [metha, setMetha] = useState('')
    const [isUpdate, setUpdate] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        getAllMetha(id)
    }, [isUpdate])

    const [allMethas, setAllMethas] = useState([{}])

    const getAllMetha = async (id: string | undefined) => {
        try {
            await api.get(`/api/metha/${id}`)

                .then(res => setAllMethas(res.data))
                .catch(err => window.alert(err))
        } catch (error) {
            window.alert(error)
        }

    }

    console.log(allMethas)
    const addMetha = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try {
            if (metha) {
                await api.post(`/api/metha/add/${id}`, {
                    title: metha,
                    category: category.toUpperCase()
                })
                setUpdate(!isUpdate)
            } else {
                window.alert('Adicione a metha!')
            }
        } catch (error) {
            window.alert(error)
        }
    }

    const removeMetha = async (id: string) => {
        try {
            await api.post(`/api/metha/delete`, {
                metha_id: id
            })
            setUpdate(!isUpdate)
        } catch (error) {
            window.alert(error)
        }
    }

    return (
        <div>
            <form className={styles.form_login} onSubmit={addMetha}>
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
                methas={allMethas}
                category={category}
                deleteMetha={removeMetha} />
        </div>
    );
}