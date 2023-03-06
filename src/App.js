import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home/Home';
import Signup from './components/Home/Signup';
import Aboutus from './components/Home/Aboutus';
function App() {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/about' element={<Aboutus />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
