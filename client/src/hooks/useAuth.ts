import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import api from '../utils/api'

export interface UserData {
  data: object,
  token: string,
  accessToken: string,
  user: string
}

export default function useAuth() {

  const [authenticated, setAuthenticated] = useState(() => localStorage.getItem('token') ? true : false)
  const [userSession, setUserSession] = useState({})
  const [authToken, setAuthToken] = useState(() => localStorage.getItem('token') ? JSON.stringify(localStorage.getItem('token')) : null)
  const [loading, setLoading] = useState(true)
  const history = useNavigate()

  const getUser = async () => await api.get('/api/users/me').then(res => setUserSession(res.data)).catch(err => console.log(err))

  useEffect(() => {
    setAuthToken(localStorage.getItem('token'))
    if (authToken) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(authToken)}`
      setAuthenticated(true)
      getUser()
    }

    setLoading(false)
  }, [authToken, loading])

  async function register(user: object) {
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
    try {
      const data = await api.post('/api/auth/sessions', user).then((response) => {
        return response.data
      })
      await authUser(data)
    } catch (error: unknown) {
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
        console.log('User:', userSession)
        history(`/home`)
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log('Erro de autenticação')
    }
  }

  function logout() {
    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = ''
    history('/')
  }
  return { authenticated, loading, register, login, logout, verifyUser, verifyEmail, verifyEmailCode }
}
