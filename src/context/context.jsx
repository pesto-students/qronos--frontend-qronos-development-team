import React, { createContext, useContext, useState } from "react";
import { LocalStorage, LocalStorageKeys } from "../utils/LocalStorage";
import AWS from 'aws-sdk'

export const DatabaseContext = createContext({})

export const DatabaseProvider = ({
    children
}) => {
    const [database, setDatabase] = useState(localStorage ? LocalStorage?.get(LocalStorageKeys?.DATABASE_BASE_DETAILS) : null)
    const [allDatabases, setAllDatabases] = useState()
    const [folderKey, setFolderKey] = useState()
    const [currentDatabase, setCurrentDatabase] = useState(0)
    return (
        <DatabaseContext.Provider value={{
            database,
            setDatabase,
            allDatabases,
            setAllDatabases,
            folderKey,
            setFolderKey,
            currentDatabase,
            setCurrentDatabase
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
    accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_S3_REGION,
})


// export const createAnObject = async (name) => {

//     const { setFolderKey } = useContext(DatabaseContext)
//     const params = {
//         Bucket: 'qronos-1',
//         Key: `${name}/`,
//         Body: '',
//         ACL: 'public-read',
//     };
//     s3.putObject(params, (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             setFolderKey(name)
//             console.log(`Folder created successfully. ${data.Location}`);
//         }
//     });
// }

// export const consistObject = async (id) => {

//     let folderExists = false
//     s3.listObjectsV2({
//         Bucket: 'qronos-1',
//         Prefix: `${id}/`,
//         MaxKeys: 1
//     }, function (err, data) {
//         folderExists = data.Contents.length > 0;
//     });
//     return folderExists
// }