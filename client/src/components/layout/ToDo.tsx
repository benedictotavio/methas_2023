import React from 'react'
import Card from '../items/Card'
import style from './ToDo.module.css'

const ToDo = () => {
    return (
        <div className={style.todo}>
            <div>
                <Card />
            </div>
        </div>
    )
}
export default ToDo