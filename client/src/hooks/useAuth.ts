import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'


export interface UserData {
  data: void,
  accessToken: string,
  user: string,
  id?: string
}

const URL = 'http://localhost:3030'

export default function useAuth() {

  const [authenticated, setAuthenticated] = useState(false)
  const [acessToken, setAcessToken] = useState<string | null>(localStorage.getItem('token'))
  const [userSession, setUserSession] = useState<{ _id?: string }>({})
  const [loading, setLoading] = useState(true)
  const history = useNavigate()

  useEffect(() => {
    setAcessToken(localStorage.getItem('token'))
    console.log(acessToken)
    if (acessToken) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(acessToken)}`
      setAuthenticated(true)
      console.log('acessToken: ', acessToken)
    }
    setLoading(false)
  }, [])

  console.log(authenticated)

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
      window.alert('Usuário já cadastrado!')
    }
  }

  async function login(user: object) {
    try {
      const data = await fetch(URL + '/api/auth/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      }).then(res => res.json())
      if (data.accessToken) {
        await authUser(data)
      } else {
        window.alert('Token invalido!')
      }
    } catch (error: unknown) {
      console.log('Erro de autenticação!')
    }
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
      history(`/verify/${data}`)
    } else {
      console.log('error')
    }
  }

  async function getUser() {
    try {
      const user = api.get('/api/users/me')
        .then(res => res.data)
        .catch(err => err)
      return user
    } catch (error) {
      console.log(error)
    }
  }

  async function authUser(data: UserData) {
    if (data) {
      setAuthenticated(true)
      const user = await getUser()
      setUserSession(user)
      localStorage.setItem('token', JSON.stringify(data.accessToken))
      console.log('User: ', userSession)
      history('/home')
    } else {
      console.log('Erro de autenticação')
    }
  }

  function logout() {

    setAuthenticated(false)

    localStorage.removeItem('token')

    api.defaults.headers.Authorization = null

    history('/')
  }

  return { authenticated, loading, register, login, logout, verifyUser, verifyEmail, verifyEmailCode, getUser }
}
