
import './App.css';
import { Navbar } from './navbar/Navbar';
import { Home } from './Pages/Home/Home';
import { Store } from './Pages/Store/Store';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Cart } from './Pages/Cart/Cart';
import {ShopContextProvider} from './usetext/context.jsx'

function App() {
  return (
    < div >
     <ShopContextProvider>
    <Router>
    <Navbar/> 
   <Routes>
     <Route  path='/' element={ <Home/> }      />       
     <Route  path='/Store' element={<Store/>  }      />   
     <Route  path='/Cart' element={<Cart/>  }      />   
   </Routes>
        
    </Router>
        
    </ShopContextProvider>
    </div>
  );
}

export default App;
