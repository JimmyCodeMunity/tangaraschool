import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutusPage from './pages/AboutusPage';
import BlogPage from './pages/BlogPage';
import ContactusPage from './pages/ContactusPage';
import TeamsPage from './pages/TeamsPage';
import LoginPage from './pages/LoginPage';
import FaqPage from './pages/FaqPage';
import AdmissionPage from './pages/AdmissionPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/programs' element={<ServicesPage/>} />
        <Route path='/aboutus' element={<AboutusPage/>} />
        <Route path='/admission' element={<AdmissionPage/>} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/contactus' element={<ContactusPage/>} />
        <Route path='/team' element={<TeamsPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/faq' element={<FaqPage/>} />
      </Routes>
    </div>
  );
}

export default App;
