import './App.css';
import React, {useContext} from 'react'
import Header from './components/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import DetailsScreen from './screens/DetailsScreen';
import CartScreen from './screens/CartScreen'
import AuthContext from './store/authContext';


function App() {
  const authCtx = useContext(AuthContext)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path='/auth' element={!authCtx.token ? <AuthScreen/> : <Navigate to='/' />}/>
        <Route path="/details/:id" element={<DetailsScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </div>
  );
}

export default App;





