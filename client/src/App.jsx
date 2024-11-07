import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/auth/AuthLayout';
import Login from './pages/auth/login';
import Signup from './pages/auth/Signup';

import Dashboard from './pages/admin-view/Dashboard';
import Products from './pages/admin-view/Products';
import AdminLayout from './components/admin/AdminLayout';
import ShoppingLayout from './components/shopping/ShoppingLayout';
import NotLayout from './components/not-found/NotLayout';
import List from './pages/shopping-view/List';
import Acc from './pages/shopping-view/Acc';
import ShopHome from './pages/shopping-view/Home';
import Checkout from './pages/shopping-view/Checkout';
import CheckAutho from './components/common/Checkauth';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/authSlice";
import { Skeleton } from "@/components/ui/skeleton";


function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
     

     <Routes>
      <Route path="/auth" element={
        <CheckAutho isAuthenticated={isAuthenticated} user={user}>
        <AuthLayout/>
      </CheckAutho>
          }>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Route>
      <Route path="/admin" element={
        <CheckAutho isAuthenticated={isAuthenticated} user={user}>
        <AdminLayout />
      </CheckAutho>
        }>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="products" element={<Products/>}/>
     
      </Route>
      <Route path="/shop" element={
        <CheckAutho isAuthenticated={isAuthenticated} user={user}>
        <ShoppingLayout/>
      </CheckAutho>
          
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
