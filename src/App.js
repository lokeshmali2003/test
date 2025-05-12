import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Category from "./views/Category";
import Newspage from "./views/Newspage";
import ShowNews from "./views/ShowNews";
import Webindex from "./views/Webindex";
import Testing from "./views/Testing";
import BlogView from "./views/BlogView";
const App = () => {
  return (

    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} /> 
        <Route path="/Newspage" element={<Newspage />} /> 
        <Route path="/ShowNews" element={<ShowNews />} /> 
        <Route path="/Webindex" element={<Webindex />} /> 

        <Route path="/test" element={<Testing />} /> 

        <Route path="/blogview/:id" element={<BlogView />} /> 
      </Routes>
    </Router>
  );
};

export default App;
