import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import './index.css'
import { Link } from 'react-router-dom';
import Signup from './components/user_dashboard/Signup';
import Home from './components/Home';
function App() {

  return (
    <BrowserRouter>
            
    <Routes>
    <Route path='/' exact component={Home}/>
<Route path='/dashboard' exact component={Signup}/>
    </Routes>
    <ul class="flex items-center mr-10">
    <Link to="/"><li class="font-heading mr-9 text-white hover:text-gray-200 text-lg">   Feature</li></Link>  
     <Link to="/about"><li class="font-heading mr-9 text-white hover:text-gray-200 text-lg">Solutions</li></Link> 
     <Link to="/dashboard"><li class="font-heading mr-9 text-white hover:text-gray-200 text-lg">Dashboard</li></Link> 
    <Link to="/signup">  <li class="font-heading text-white hover:text-gray-200 text-lg">Pricing</li></Link>
    </ul>





    </BrowserRouter>











   
  );
}

export default App;
