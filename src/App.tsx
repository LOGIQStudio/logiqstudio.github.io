import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/ui-custom/Navigation';
import { Footer } from '@/components/ui-custom/Footer';
import { Home } from '@/pages/Home';
import { Services } from '@/pages/Services';
import { Portfolio } from '@/pages/Portfolio';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { Blog } from '@/pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
