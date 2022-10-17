
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
import CurrentlyBidding  from './PaginationComp/CurrentAuctinsComponnet/CurrentlyBidding';
import DisplayItemCurrent from './DisplayItemComp/DisplayItemCurrent';
import DisplayItemCurrentSell from './DisplayItemComp/DisplayItemCurrentSell';
function App() {
  return (
    <div className="App">
    <SearchAppBar></SearchAppBar>
   <Routes>
   <Route path="/" element={<AddItem/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/register" element={<RegisterForm/>}/>  
      <Route path="/currentBid" element={<CurrentlyBidding/>}/>
      <Route path="/logIn" element={<Loginform/>}/>  
      <Route path="/addItem" element={<AddItem/>}/> 
      <Route path="/displayMen" element={<DisplayItemMen/>}/> 
      <Route path="/displayWomen" element={<DisplayItemWomen/>}/> 
      <Route path="/displayKids" element={<DisplayItemKids/>}/> 
      <Route path="/displayCurrent" element={<DisplayItemCurrent/>}/> 
      <Route path="/displayCurrentSell" element={<DisplayItemCurrentSell/>}/> 
      <Route path="/register" element={<RegisterForm/>}/> 
      
    </Routes>
    </div>
  );
}

export default App;



