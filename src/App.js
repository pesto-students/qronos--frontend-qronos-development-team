import { BrowserRouter, Routes, Route, useNavigate, createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home/Home';
import Signup from './components/Home/Signup';
import Aboutus from './components/Home/Aboutus';
import Signin from './components/Home/Signin';
import NotFound404 from './components/Home/NotFound404';
import Api from './components/dashboard/Api';
import Contentview from './components/dashboard/Contentview';
import LoadImages from './components/dashboard/LoadImages';
import Userprofile from './components/dashboard/Userprofile';
import { useAuth0 } from '@auth0/auth0-react';
import ContentProductEntry from './components/dashboard/ContentProductEntry';
import ContentBlogEntry from './components/dashboard/ContentBlogEntry';
import { useContext, useEffect } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();
// import Header from './components/Home/Header';
// import Footer from './components/Home/Footer';
import { CounterContext, DatabaseContext, UserContext } from './context/context';
import { LocalStorage, LocalStorageKeys } from './utils/LocalStorage';

// import AWS from 'aws-sdk';
import { useConsistObject, useCreateAnObject } from './hooks';


function App() {
    const { isAuthenticated, user, logout } = useAuth0();
    // console.log(user);

    // console.log(process.env.REACT_APP_REACT_APP_API_URL);

    // const navigate = useNavigate()
    const {
        setDatabase,
        allDatabases,
        setAllDatabases,
        setFolderKey,
        currentDatabase
    } = useContext(DatabaseContext)
    const { setUser } = useContext(UserContext)
    const { counter, setCounter } = useContext(CounterContext)

    const consistObject = useConsistObject()
    const createAnObject = useCreateAnObject()

    // AWS.config.update({
    //     accessKeyId: 'AKIAQCUQ2ARQBJLLDHVW',
    //     secretAccessKey: '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',
    //     region: 'ap-south-1',
    // });


    const apiCallUser = async () => {
        console.log(user.email);
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/get-user`, {
                params: {
                    emailId: user.email,
                    name: user.name
                }
            })
            setUser({
                email: result.data.email,
                name: result.data.name
            })
            LocalStorage.set(LocalStorageKeys.USER_DETAILS, JSON.stringify({
                email: result.data.email,
                name: result.data.name
            }))
            console.log("result", result.data.database[currentDatabase]._id);
            if (result.data.database.length > 0) {
                setDatabase(result.data.database[currentDatabase])
                const folderExists = await consistObject(result.data.database[currentDatabase]._id)
                if (folderExists) {
                    setFolderKey(result.data.database[currentDatabase]._id)
                } else {
                    createAnObject(result.data.database[currentDatabase]._id)
                }
                // setFolderKey(result.data.database[0]._id)
                setAllDatabases(result.data.database)
                LocalStorage.set(LocalStorageKeys.DATABASE_BASE_DETAILS, JSON.stringify(result.data.database[currentDatabase]))
            } else {
                if (window.location.pathname !== '/dashboard')
                    window.location.replace('/dashboard')
            }
        } catch (error) {
            console.error(error);
        }
    }

    // useEffect(() => {
    //     console.log("helo");
    //     if (!LocalStorage.get(LocalStorageKeys.USER_DETAILS) && isAuthenticated) {
    //         logout({ logoutParams: { returnTo: window.location.origin } })
    //             .then(() => {
    //                 LocalStorage.clear()
    //             })
    //     }
    // }, [LocalStorage.get(LocalStorageKeys.USER_DETAILS)])

    useEffect(() => {
        if (user) {
            apiCallUser()
        }
    }, [user, counter])

    console.log("user", user);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        }, {
            path: '/about',
            element: <Aboutus />
        }, {
            path: '/404',
            element: <NotFound404 />
        }, {
            path: '/api',
            element: <Api />
        }, {
            path: '/dashboard',
            element: <Dashboard />
        }, {
            path: '/medialibrary',
            element: <LoadImages />
        }, {
            path: '/content',
            element: <Contentview />
        }, {
            path: '/content/product',
            element: <ContentProductEntry />
        }, {
            path: '/content/blog',
            element: <ContentBlogEntry />
        }
    ])

    return <RouterProvider router={router} />
}

export default App;
