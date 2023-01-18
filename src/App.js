import './App.css';
import React from 'react'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import DetailsScreen from './screens/DetailsScreen';
import CartScreen from './screens/CartScreen'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/details/:id" element={<DetailsScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </div>
  );
}

export default App;
