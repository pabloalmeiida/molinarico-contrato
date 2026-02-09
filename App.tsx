
import React from 'react';
import ContractForm from './components/ContractForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 py-12">
      <div className="w-full max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold text-white uppercase tracking-widest mb-4">
            MOLINARI <span className="text-gold">&</span> CO.
          </h1>
          <div className="h-px w-24 bg-gold mx-auto mb-6"></div>
          <h2 className="text-xl font-serif text-white uppercase tracking-[0.2em]">
            Criação de Contratos Automático
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Ao colar o prompt no campo abaixo, uma automação no n8n será iniciada, 
            com o intuito de extrair as informações enviadas, gerar um contrato e subir 
            no Autentique, pronto para avaliar e assinar.
          </p>
        </header>
        
        <ContractForm />
        
        <p className="mt-8 text-center text-[10px] tracking-[0.3em] text-gray-600 uppercase">
          FERRAMENTA DE USO INTERNO · MOLINARI & CO.
        </p>
      </div>
    </div>
  );
};

export default App;
