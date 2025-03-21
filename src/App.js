import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header/Header';

// Pages
import Home from './pages/Home/Home';
import Team from './pages/Team/Team'; // Make sure this is importing the correct Team component
import Services from './pages/Services/Services';
import Commercial from './pages/Services/Commercial'; // Import the Commercial component
import PropertyLaw from './pages/Services/PropertyLaw'; // Import the PropertyLaw component
import NotarialServices from './pages/Services/NotarialServices'; // Import the NotarialServices component
import WillsEstates from './pages/Services/WillsEstates'; // Import the WillsEstates component
import Litigation from './pages/Services/Litigation'; // Import the Litigation component
import AntenuptialContracts from './pages/Services/AntenuptialContracts'; // Import the AntenuptialContracts component
import BEE from './pages/BEE/BEE';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import ArticleDetail from './pages/News/ArticleDetail'; // Import the ArticleDetail component
import History from './pages/History/History';
import PAIA from './pages/PAIA/PAIA';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/commercial" element={<Commercial />} /> {/* Add route for Commercial */}
            <Route path="/services/property-law" element={<PropertyLaw />} /> {/* Add route for PropertyLaw */}
            <Route path="/services/notarial-services" element={<NotarialServices />} /> {/* Add route for NotarialServices */}
            <Route path="/services/wills-estates" element={<WillsEstates />} /> {/* Add route for WillsEstates */}
            <Route path="/services/litigation" element={<Litigation />} /> {/* Add route for Litigation */}
            <Route path="/services/antenuptial-contracts" element={<AntenuptialContracts />} /> {/* Add route for AntenuptialContracts */}
            <Route path="/bee" element={<BEE />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            {/* Article detail routes */}
            <Route path="/news/:articleId" element={<ArticleDetail />} />
            <Route path="/history" element={<History />} />
            <Route path="/paia" element={<PAIA />} />
            {/* Removed placeholder routes for PAIA subpages since we now have direct document links */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
