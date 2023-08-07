// App.js or any other main file
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import Program from './main/program/index';
import Footer from './components/footer';
import CourseDetail from './main/program/detail';
import json from './data.json';
import HirePage from './components/hire-page/hire';

const BlogPage = () => <h1>Blog Page</h1>;
const InternshipPage = () => <h1>Internship Page</h1>;

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='content-wrapper'>
          <Routes>
            <Route path="/" element={<Program />} />
            <Route path="/hire" element={<HirePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/internship" element={<InternshipPage />} />
            <Route exact path="/program/:id" element={<CourseDetail courses={json.courseInfo} />}/>
          </Routes>
        </div>
        <div>
        <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
