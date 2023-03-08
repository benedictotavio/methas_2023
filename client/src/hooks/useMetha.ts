import { useState } from 'react'
import api from '../utils/api'


export interface MethasType {
    id?: string
}



export default function useMetha() {

    const [update, setUpdate] = useState(false)

    async function allMetha(metha: {
        id?: string
    }) {
        try {
            const data = api.get(`api/metha/${metha.id}`).then((response) => {
                return response.data
            })
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async function saveMetha(metha: {
        id?: string,
        title: string,
        category: string
    }) {
        try {
            await api.post(`/api/metha/add/${metha.id}`, {
                title: metha.title,
                category: metha.category.toUpperCase()
            })
            setUpdate(!update)
        } catch (error) {
            window.alert(error)
        }
    }

    const deleteMetha = async (id: string) => {
        try {
            await api.post(`/api/metha/delete`, {
                metha_id: id
            })
            setUpdate(!update)
        } catch (error) {
            window.alert(error)
        }
    }

    const notDoneMetha = async (id: string) => {
        try {
            await api.post('/api/metha/uncomplete', {
                metha_id: id
            })
        } catch (error) {
            window.alert(error)
        }
    }

    const doneMetha = async (id: string) => {
        try {
            await api.post('/api/metha/complete', {
                metha_id: id
            })
            setUpdate(!update)
        } catch (error) {
            window.alert(error)
        }
    }

    return { allMetha, saveMetha, deleteMetha, notDoneMetha, doneMetha, update }

}