import React, { createContext, useState } from "react";
import { LocalStorage, LocalStorageKeys } from "../utils/LocalStorage";
import AWS from 'aws-sdk'

export const DatabaseContext = createContext({})

export const DatabaseProvider = ({
    children
}) => {
    const [database, setDatabase] = useState(localStorage ? LocalStorage?.get(LocalStorageKeys?.DATABASE_BASE_DETAILS) : null)
    const [allDatabases, setAllDatabases] = useState()
    return (
        <DatabaseContext.Provider value={{
            database,
            setDatabase,
            allDatabases,
            setAllDatabases
        }}>
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

export const CounterContext = createContext({})

export const CounterProvider = ({
    children
}) => {
    const [counter, setCounter] = useState(0)

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    )
}

export const s3 = new AWS.S3({
    accessKeyId: 'AKIAQCUQ2ARQBJLLDHVW',
    secretAccessKey: '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',
    region: 'ap-south-1',
})

