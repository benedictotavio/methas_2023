import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'

interface UserData {
  data: object,
  token: string
}

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const history = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function register(user: object) {

    let msgText = 'Cadastro realizado com sucesso!'

    let msgType = 'success'

    try {

      const data = await api.post('/api/users', user).then((response) => {
        return response.data
      })

      data ? await authUser(data) : window.alert('O Registro de usuário falhou!')

    } catch (error) {
      // tratar erro
      // msgText = error.response.data.message
      msgType = 'error'
    }
  }

  async function login(user: object) {
    let msgText = 'Login realizado com sucesso!'
    let msgType = 'success'
    try {

      const data = await api.post('/api/auth/sessions', user).then((response) => {
        return response.data
      })

      await authUser(data)

    } catch (error) {
      // tratar erro
      // msgText = error.response.data.message
      msgType = 'error'
    }

    // setFlashMessage(msgText, msgType)
  }

  async function authUser(data: UserData) {

    setAuthenticated(true)

    localStorage.setItem('token', JSON.stringify(data.token))

    history('/home')

  }

  function logout() {
    const msgText = 'Logout realizado com sucesso!'
    const msgType = 'success'

    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = null
    history('/login')

    // setFlashMessage(msgText, msgType)
  }

  return { authenticated, loading, register, login, logout }
}
