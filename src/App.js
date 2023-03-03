import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
// import { Link } from 'react-router-dom';
import Signup from './components/user_dashboard/Signup';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/dashboard' element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
