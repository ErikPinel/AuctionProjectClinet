
import './App.css';



import SearchAppBar from './NavComp/Nav';
import { Route, Routes } from 'react-router';
import RegisterForm from './LogRegComp/Register';
import AddItem from './AddItemComp/addItem';
import Loginform from './LogRegComp/Login';
import DisplayItemMen from './DisplayItemComp/DisplayItemMen';
import DisplayItemWomen from './DisplayItemComp/DisplayItemWomen';
import DisplayItemKids from './DisplayItemComp/DisplayItemKids';
import { Home } from './HomeComp/Home';
function App() {
  return (
    <div className="App">
    <SearchAppBar></SearchAppBar>
   <Routes>
   <Route path="/" element={<AddItem/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/register" element={<RegisterForm/>}/>  
      <Route path="/logIn" element={<Loginform/>}/>  
      <Route path="/addItem" element={<AddItem/>}/> 
      <Route path="/displayMen" element={<DisplayItemMen/>}/> 
      <Route path="/displayWomen" element={<DisplayItemWomen/>}/> 
      <Route path="/displayKids" element={<DisplayItemKids/>}/> 
      <Route path="/register" element={<RegisterForm/>}/> 
      
    </Routes>
    </div>
  );
}

export default App;



