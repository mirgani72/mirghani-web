import { Routes, Route } from 'react-router-dom';
import { I18nProvider } from './lib/i18n';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Approche from './pages/Approche';
import Services from './pages/Services';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';

export default function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-cream">
        <NavBar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/mon-approche" element={<Approche />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
        </Routes>
        <Footer />
      </div>
    </I18nProvider>
  );
}
