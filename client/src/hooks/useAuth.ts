import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface UserData {
  data:object,
  token: string
}

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const history = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      // api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function register(user: object) {

    let msgText = 'Cadastro realizado com sucesso!'
    
    let msgType = 'success'

    try {
      const data = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(user)
      }).then((res) => res)
      .catch(err => err) as UserData;

      await authUser(data)

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
      const data = await fetch('/api/auth/sessions', {
        method: 'POST',
        body: JSON.stringify(user)
      }).then((res) => res) as UserData;

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
    // api.defaults.headers.Authorization = undefined
    history('/login')

    // setFlashMessage(msgText, msgType)
  }

  return { authenticated, loading, register, login, logout }
}
