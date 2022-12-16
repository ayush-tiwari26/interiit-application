import React from 'react'
export const UserTokenContext = React.createContext({})

export default function UserTokenProvider({ children }) {
    const [userToken, setUserToken] = React.useState()
    return (
        <UserTokenContext.Provider value={{ userToken, setUserToken }}>
            {children}
        </UserTokenContext.Provider>
    )
}