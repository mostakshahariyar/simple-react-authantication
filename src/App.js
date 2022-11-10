import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import SignIn from './component/SignIn/SignIn';
import Signup from './component/Signup/Signup';
import Shipping from './Shipping/Shipping';
// import Shipping from './Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="home" element={<Home />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path='shipping' element={<Shipping />} />
              <Route path='placeorder' element={<PlaceOrder />} />
              <Route path='1' element={<NotFound />} />
            </Route>
            <Route path='*' element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
