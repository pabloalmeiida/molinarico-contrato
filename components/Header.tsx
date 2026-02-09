
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold tracking-[0.2em] text-white">
            MOLINARI <span className="text-gold">&</span> CO.
          </span>
        </div>
        
        <button 
          className="hidden md:block border border-white/30 px-6 py-2 text-xs font-semibold uppercase tracking-widest text-white hover:border-white transition-colors duration-300"
        >
          INQUIRE FOR AVAILABILITY
        </button>
      </div>
    </header>
  );
};

export default Header;
