import { useState } from 'react'
import api from '../utils/api'


export interface MethasType {
    id?: string
}

export default function useMetha() {

    const [isUpdate, setUpdate] = useState(false)

    const completeMetha = async (id: string) => {
        try {
            await api.post('/api/metha/complete', {
                metha_id: id
            })

        } catch (error) {
            window.alert(error)
        }

    }

    const uncompleteMetha = async (id: string) => {
        try {
            await api.post('/api/metha/uncomplete', {
                metha_id: id
            })

        } catch (error) {
            window.alert(error)
        }

    }


    const addMetha = async (metha: {
        id?: string,
        category: string,
        title: string
    }) => {
        try {
            await api.post(`/api/metha/add/${metha.id}`, {
                title: metha.title,
                category: metha.category.toUpperCase()
            })
            setUpdate(!isUpdate)
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


    return { removeMetha, addMetha, completeMetha, uncompleteMetha, isUpdate }

}