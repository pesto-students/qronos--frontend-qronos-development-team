import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home/Home';
import Signup from './components/Home/Signup';
import Aboutus from './components/Home/Aboutus';
import Signin from './components/Home/Signin';
import NotFound404 from './components/Home/NotFound404';
import { useAuth0 } from '@auth0/auth0-react';
function App() {
    const { isAuthenticated } = useAuth0();

    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route index element={<Home />} />

                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/about' element={<Aboutus />} />

                    <Route path='/404' element={<NotFound404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
