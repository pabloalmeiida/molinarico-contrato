
import React from 'react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center pt-20 hero-overlay overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="flex flex-col gap-6 max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-white uppercase tracking-tight">
            Criação de Contratos Automático
          </h1>
          
          <p className="text-gold italic font-serif text-xl md:text-2xl">
            You Don't Have to Write a Single Word.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Ao colar o prompt no campo abaixo, uma automação no n8n será iniciada, 
            com o intuito de extrair as informações enviadas, gerar um contrato e subir 
            no Autentique, pronto para avaliar e assinar.
          </p>
          
          <div className="mt-4 flex flex-col gap-4">
            <h3 className="text-white font-serif text-2xl">Your Contract. Done for You.</h3>
            <p className="text-xs tracking-widest text-gray-400 uppercase">
              FAST DELIVERY · AI DRIVEN · LEGAL READY
            </p>
          </div>

          <button 
            onClick={scrollToForm}
            className="mt-6 w-full md:w-fit bg-gold px-12 py-5 text-sm font-bold uppercase tracking-widest text-black hover-bg-gold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl"
          >
            INICIAR AGORA
          </button>
          
          <p className="text-[10px] tracking-[0.2em] text-gray-500 uppercase mt-2">
            ACCEPTING NEW CONTRACTS NOW.
          </p>
        </div>

        <div className="hidden lg:flex justify-end relative">
          <div className="relative w-[450px] h-[550px]">
             {/* Decorative gold glow behind the person placeholder */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/20 rounded-full blur-[100px]"></div>
            
            <img 
              src="https://picsum.photos/id/64/800/1000" 
              alt="Molinari Associate" 
              className="w-full h-full object-cover grayscale brightness-90 border-b-4 border-gold shadow-2xl rounded-t-lg"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-black border border-white/10 p-6 shadow-2xl">
                <p className="text-gold font-serif text-3xl">99%</p>
                <p className="text-[10px] tracking-widest text-gray-400 uppercase">Eficiência IA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
