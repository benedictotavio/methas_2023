import React from 'react'
import AddCard from '../items/AddCard'
import Card from '../items/Card'
import style from './ToDo.module.css'

const ToDo = () => {
    return (
        <div className={style.todo}>
            <div>
                <div className={style.container}>
                    <Card icon='money' category='Dinheiro' text={`Faça o ano de ${new Date().getFullYear()} ser o mais endireinhado da sua vida, hora de conseguir aquele dinheiro extra!`} colorIcon='green'/>
                    <Card icon='family' category='Familia' text={`Em ${new Date().getFullYear()} eu vou passar mais tempo com a familia.`} colorIcon='cornflowerblue'/>
                    <Card icon='health' category='Saúde' text={`Em ${new Date().getFullYear()} minha saude será minha prioridade!`} colorIcon='crimson'/>
                </div>
                <AddCard />
            </div>
        </div>
    )
}
export default ToDo