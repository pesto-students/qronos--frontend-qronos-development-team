import React, { createContext, useState } from "react";

export const DatabaseContext = createContext({})

export const DatabaseProvider = ({
    children
}) => {
    const [database, setDatabase] = useState()

    return (
        <DatabaseContext.Provider value={{ database, setDatabase }}>
            {children}
        </DatabaseContext.Provider>
    )
}

export const UserContext = createContext({})

export const UserProvider = ({
    children
}) => {
    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
