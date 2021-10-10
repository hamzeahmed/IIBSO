import 'mdb-ui-kit/css/mdb.min.css';
import * as mdb from 'mdb-ui-kit';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Navbar mdb={mdb}/>
        <Route path="/cart/:id?" component={CartScreen} ></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
