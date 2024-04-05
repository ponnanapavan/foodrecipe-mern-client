
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Auth from './pages/auth';
import Createrecipepage from './pages/create-recipepage';
import Savedrecipes from './pages/saved-recipes';
import Navbar from './components/Navbar';
import GetData from './pages/GetData';
export const BASE_URL = "https://backendserver-food.onrender.com"
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/create-recipe' element={<Createrecipepage/>}/>
        <Route path='/saved-recipes' element={<Savedrecipes/>}/>
        <Route path='/getdata/:id' element={<GetData/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
