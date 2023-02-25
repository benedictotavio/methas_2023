import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'

export interface UserData {
  data: object,
  token: string,
  accessToken: string
}

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const history = useNavigate()

  useEffect(() => {

    const token = localStorage.getItem('token')



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

      if (data) {
        try {
          await createUser(data)
        } catch (error) {
          window.alert(error)
        }
      }
    } catch (error) {
      // tratar erro
      // msgText = error.response.data.message
      window.alert('Usuário já cadastrado!')
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

  async function verifyUser(user: {
    id?: string,
    verifyCode: string
  }) {
    try {
      const data = await api.post(`/api/users/verify/${user.id}/${user.verifyCode}`).then((response) => {
        return response.data
      })
      window.alert(data)
      history('/')
    } catch (error) {
      console.log(error)
    }
  }

  async function verifyEmail(user: {
    email: string
  }) {
    try {
      const data = await api.post('/api/users/forgotpassword', user).then((response) => {
        return response.data
      })
      console.log(data)
      history(`/forgot/${data}`)
    } catch (error) {
      console.log(error)
    }
  }

  async function verifyEmailCode(user: {
    password: string,
    confirmPassword: string
  }, endpoint: {
    id?: string,
    verifyCode: string,
  }) {
    try {
      const data = await api.post(`/api/users/forgotpassword/${endpoint.id}/${endpoint.verifyCode}`, user).then((response) => {
        return response.data
      })
      console.log(data)
      history('/')
    } catch (error) {
      console.log(error)
    }
  }

  async function createUser(data: UserData) {
    if (data) {
      setAuthenticated(false)
      // localStorage.setItem('token', JSON.stringify(data.token))
      history(`/verify/${data}`)
    } else {
      console.log('error')
    }
  }

  async function authUser(data: UserData) {
    if (data) {
      try {
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.accessToken))
        history('/home')
      } catch (error) {
        console.log(error)
      }

    } else {
      console.log('Erro de autenticação')
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

  return { authenticated, loading, register, login, logout, verifyUser, verifyEmail, verifyEmailCode }
}
