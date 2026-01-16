import React, { createContext, useState} from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [theme, setTheme] = useState('light')
    return (
        <AuthContext.Provider value={{ user, setUser, theme, setTheme }}>
            {children}
        </AuthContext.Provider>
    )
}