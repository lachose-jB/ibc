import { FC } from 'react';
import { Globe } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Speakers from './components/Speakers';
import Advantages from './components/Advantages';
import Registration from './components/Registration';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Program />
      <Speakers />
      <Advantages />
      <Registration />
      <Footer />
    </div>
  );
};

export default App;
