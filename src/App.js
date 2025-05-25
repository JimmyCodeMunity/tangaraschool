import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutusPage from './pages/AboutusPage';
import MembershipPage from './pages/MembershipPage';
import BlogPage from './pages/BlogPage';
import ContactusPage from './pages/ContactusPage';
import TeamsPage from './pages/TeamsPage';
import LoginPage from './pages/LoginPage';
import FaqPage from './pages/FaqPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/services' element={<ServicesPage/>} />
        <Route path='/aboutus' element={<AboutusPage/>} />
        <Route path='/membership' element={<MembershipPage/>} />
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
