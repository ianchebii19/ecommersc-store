import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/ui/auth/AuthLayout';
import Login from './pages/auth/login';
import Signup from './pages/auth/Signup';

import Dashboard from './pages/admin-view/Dashboard';
import Products from './pages/admin-view/Products';
import AdminLayout from './components/ui/admin/AdminLayout';
import ShoppingLayout from './components/ui/shopping/ShoppingLayout';
import NotLayout from './components/ui/not-found/NotLayout';
import List from './pages/shopping-view/List';
import Acc from './pages/shopping-view/Acc';
import ShopHome from './pages/shopping-view/Home';
import Checkout from './pages/shopping-view/Checkout';
import CheckAuth from './components/ui/common/Checkauth';




function App() {
  const isAuthenticated = false;
  const user = {
    name: "Chebii",
    role : "admin"
  };
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
     

     <Routes>
      <Route path="/auth" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <AuthLayout/>
      </CheckAuth>
          }>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Route>
      <Route path="/admin" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <AdminLayout />
      </CheckAuth>
        }>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="products" element={<Products/>}/>
     
      </Route>
      <Route path="/shop" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <ShoppingLayout/>
      </CheckAuth>
          
         }>
        <Route path="listing" element={<List/>}/>
        <Route path="account" element={<Acc/>}/>
        <Route path="Shophome" element={<ShopHome/>}/>
        <Route path="checkout" element={<Checkout/>}/>
     
      </Route>
      
      <Route path="*" element={<NotLayout/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
