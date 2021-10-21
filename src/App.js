import './App.scss';
import { ToastContainer } from 'react-toastify';
import { Switch, Route} from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import Home from './components/Home';
import Cart from './components/Cart/Cart';

function App() {


  return (
    <div className="App" dir="rtl">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
