import Categories from './components/categories/categories';
import Schemes from './components/schemes/schemes';
import Home from './components/home/home';
import LoginPage from './components/Login/login.js'
import FAQPage from './components/faq/faq.js';
import SchemeDetail from './components/schemes/scheme_detail.js';
import SignUpPage from './components/signup/signup.js';
import './components/common/bootstrap.min.css';
import './components/common/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Particular_categories_schemes from './components/categories/particular_categories_schemes.js';
function App() {
  return (
    <div>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@700;800&display=swap" rel="stylesheet"></link>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>
      <Router>
      <Routes>
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/schemes" element={<Schemes/>} />
          <Route path="/faqs" element={<FAQPage/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/schemes/detail" element={<SchemeDetail/>} />
          <Route path="/categories/schemes" element={<Particular_categories_schemes/>} />


          
          </Routes>
      </Router>

  
    </div>
  );
}

export default App;
