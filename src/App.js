import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import BlogPost from './pages/BlogPost';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import './App.css';


function App() {
    const addTopScroll = useScrollToTop();
    addTopScroll();
    
    return (
        <div className="app-container">
            <Header />
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/posts/:id" element={<BlogPost />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
