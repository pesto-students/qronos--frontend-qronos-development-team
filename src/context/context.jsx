import React, { createContext, useState } from "react";
import { LocalStorage, LocalStorageKeys } from "../utils/LocalStorage";

export const DatabaseContext = createContext({})

export const DatabaseProvider = ({
    children
}) => {
    const [database, setDatabase] = useState(LocalStorage.get(LocalStorageKeys.DATABASE_BASE_DETAILS) || null)

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
    const [user, setUser] = useState(LocalStorage.get(LocalStorageKeys.USER_DETAILS) || null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
