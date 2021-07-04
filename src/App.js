import './App.css';
import Header from './component/Header';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import Banner from './component/Banner';
import Products from './component/Products';
import Footer from './component/Footer';
import Search from './component/Search';
import Service from './component/Service';
import Checkout from './component/Checkout';
import About from './component/About';
import Contact from './component/Contact';
import { useStateValue } from './component/StateProvider';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

function App() {
  const [{basket}]=useStateValue();
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>   
        <Route path='/search/:value'>
          <Search/>
        </Route>

        <Route path='/checkout'>
          <Checkout/>
        </Route>

        <Route path='/blog'>
          <Service/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route exact path='/'>
          <Banner/>
          <Products/>
        </Route>
        <div className='checkBucket'>
          <NavLink to='/checkout'><AddShoppingCartIcon/><strong>{basket.length}</strong></NavLink>
        </div>
      <Footer/>
      </BrowserRouter>
      

      {/* Header */}
        {/* Home   */}               {/* home always show first */}
          {/* top_section */}
            {/* Banner */}
            {/* Information */}
          {/* Product section */}
        {/* Blog */}
          {/* cards ... */}
        {/* Contact */}
        {/* about */}
        {/* Searching */}
        {/* checkOut */}
          {/* user cart */}
      {/* footer */}

    </div>
  );
}

export default App;
