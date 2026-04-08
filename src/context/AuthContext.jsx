import { createContext, useState, useEffect } from 'react'
import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import PropTypes from 'prop-types';

export const AuthContext = createContext()


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      return result.user
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const logoutUser = async () => {
    try {
      await signOut(auth)
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.prototype = {
  children: PropTypes.object,
};
