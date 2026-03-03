import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Landing from './pages/Landing';
import Register from './pages/Register';
import BusinessClub from './pages/BusinessClub';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import SpeakersPage from './pages/SpeakersPage';

/**
 * Main App component with React Router
 * Routes: /, /register, /businessclub, /terms, /faq
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/businessclub" element={<BusinessClub />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/speakers" element={<SpeakersPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
