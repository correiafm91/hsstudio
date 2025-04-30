
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-end items-center">
        <div className="flex gap-8">
          <a href="#servicos" className="text-darkgray hover:text-coral transition-colors">Serviços</a>
          <a href="#processo" className="text-darkgray hover:text-coral transition-colors">Processo</a>
          <a href="#contato" className="text-darkgray hover:text-coral transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
