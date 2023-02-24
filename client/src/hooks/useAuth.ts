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

    console.log(token)

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.stringify(token)}`
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

      console.log(data)

      if (data) {
        try {
          await authUser(data)
          window.alert(data)
        } catch (error) {
          window.alert(error)
        }

      }
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

    } catch (error: unknown) {
      // tratar erro
      // msgText = error.response.data.message
      msgType = 'error'
      console.log(error)
    }
    // setFlashMessage(msgText, msgType)
  }

  async function authUser(data: UserData) {
    if (data) {
      setAuthenticated(true)
      console.log(data)
      console.log(data.token)
      localStorage.setItem('token', JSON.stringify(data.token))
      history('/home')
    } else {
      console.log('error')
    }
  }

  function logout() {
    const msgText = 'Logout realizado com sucesso!'
    const msgType = 'success'

    setAuthenticated(false)

    localStorage.removeItem('token')

    api.defaults.headers.Authorization = ''

    history('/')
    // setFlashMessage(msgText, msgType)
  }

  return { authenticated, loading, register, login, logout }
}
