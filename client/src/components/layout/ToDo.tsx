import React from 'react'
import AddCard from '../items/AddCard'
import Card from '../items/Card'
import style from './ToDo.module.css'

const ToDo = () => {
    return (
        <div className={style.todo}>
            <div>
                <div className={style.container}>
                    <Card />
                    <Card />
                </div>
                <AddCard />
            </div>
        </div>
    )
}
export default ToDo