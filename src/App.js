import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

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
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import { CounterContext, DatabaseContext, UserContext } from './context/context';
import { LocalStorage, LocalStorageKeys } from './utils/LocalStorage';

import AWS from 'aws-sdk';


function App() {
    const { isAuthenticated, user, logout } = useAuth0();
    // console.log(user);
    // const navigate = useNavigate()
    const {
        setDatabase,
        allDatabases,
        setAllDatabases
    } = useContext(DatabaseContext)
    const { setUser } = useContext(UserContext)
    const { counter, setCounter } = useContext(CounterContext)

    // AWS.config.update({
    //     accessKeyId: 'AKIAQCUQ2ARQBJLLDHVW',
    //     secretAccessKey: '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',
    //     region: 'ap-south-1',
    // });


    const apiCallUser = async () => {
        console.log(user.email);
        try {
            const result = await axios.get(`http://localhost:8080/get-user`, {
                params: {
                    emailId: user.email,
                    name: user.name
                }
            })
            console.log("result", result);
            setUser({
                email: result.data.email,
                name: result.data.name
            })
            LocalStorage.set(LocalStorageKeys.USER_DETAILS, JSON.stringify({
                email: result.data.email,
                name: result.data.name
            }))
            if (result.data.database.length > 0) {
                setDatabase(result.data.database[0])
                setAllDatabases(result.data.database)
                LocalStorage.set(LocalStorageKeys.DATABASE_BASE_DETAILS, JSON.stringify(result.data.database[0]))
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

    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route index element={<Home />} />

                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/about' element={<Aboutus />} />
                    <Route path='/api' element={<Api />} />
                    <Route path='/userprofile' element={<Userprofile />} />
                    <Route path='/medialibrary' element={<LoadImages />} />
                    <Route path='/content' element={<Contentview />} />
                    <Route path='/content/product' element={<ContentProductEntry />} />
                    <Route path='/content/blog' element={<ContentBlogEntry />} />
                    <Route path='/404' element={<NotFound404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
