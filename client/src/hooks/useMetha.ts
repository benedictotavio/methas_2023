import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'


export interface MethasType {
    id?: string
}

export default function useMetha() {

    useEffect(() => {

    }, [])




    async function getAllMetha(metha: {
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

    return { getAllMetha }

}