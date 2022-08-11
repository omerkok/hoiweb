import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BeardTransplantPage from './pages/BeardTransplantPage';
import FueAndDhiPage from './pages/FueAndDhiPage';
import ContactUsPage from './pages/ContactUsPage';
import OurClinicPage from './pages/OurClinicPage';
import BeforeAfterPage from './pages/BeforeAfterPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App' style={{ width: '100%', height: '100%' }}>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route
            path='/beardtransplant'
            exact
            element={<BeardTransplantPage />}
          />
          <Route path='/dhiandfue' exact element={<FueAndDhiPage />} />
          <Route path='/blog' exact element={<BlogPage />} />
          <Route path='/aboutus' exact element={<AboutUsPage />} />
          <Route path='/ourclinic' exact element={<OurClinicPage />} />
          <Route path='/beforeafter' exact element={<BeforeAfterPage />} />
          <Route path='/contactus' exact element={<ContactUsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
