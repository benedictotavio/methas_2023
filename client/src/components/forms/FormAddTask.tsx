import CardItems from '../items/CardItems';
import styles from './FormAddTask.module.css'

export interface ITaskFormProps {
    btnText: string,
}

export default function App({ btnText }: ITaskFormProps) {
    return (
        <div>
            <form className={styles.form_task_add}>
                <div className={styles.form_task_add_container}>
                    <label htmlFor="task"></label>
                    <input type="task" name='task' />

                    <label htmlFor="task"></label>
                    <select defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" selected>Choose a salutation ...</option>
                        <option value="valor1">Valor 1</option>
                        <option value="valor2">Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>
                </div>
                <div>
                    <input type="button" value={btnText}/>
                </div>
            </form>
            <CardItems color='#ccd5ae' />
        </div>
    );
}
