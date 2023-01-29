import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './layouts/Layout'
import Home from './pages/Home';
import NewArrival from './pages/NewArrival';
import Categories from './pages/Categories';
import Collection from './pages/Collection';
import Blog from './pages/Blog';
import Parent from './components/Parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/new-arrival" element={<NewArrival/>}></Route>
        <Route path="/categories" element={<Categories/>}></Route>
        <Route path="/collection" element={<Collection/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/parent" element={<Parent />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
