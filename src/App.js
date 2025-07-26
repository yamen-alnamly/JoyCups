import './App.css';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import CoffeeShopNav from './components/navbar/CoffeeShopNav';
import MainPage from './Pages/MainPage/MainPage';
import Shop from './Pages/Shop/Shop';
import Faq from './Pages/Faq/Faq';
import Cart from './Pages/Cart/Cart';
import { FooterSection } from './components/Footer/FooterSection';
import { ShopContextProvider } from './Context/ShopContext';

function App() {
  return (
    <div className="CoffeShop">
  <ShopContextProvider>
    <Router>
    
    <CoffeeShopNav/>
    <Routes>
    <Route path='/' element={<MainPage/>} />
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/faq' element={<Faq/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <FooterSection/>
    </Router>
  </ShopContextProvider>
    </div>
  );
}

export default App;
