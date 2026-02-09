
import React, { useState, useRef, useEffect } from 'react';

const WEBHOOK_URL = 'https://webhook.zenclick.com.br/webhook/formulario-n8n-lucasmolinari-submit-form';

const ContractForm: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFakeLoading, setShowFakeLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: React.ReactNode }>({ type: null, message: '' });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const placeholderText = "Faça um contrato completo PJ de 12k sendo pago em 1 + 4 no boleto, com as seguintes informações: RAZÃO SOCIAL: COTAINOVA PARTICIPAÇÕES LTDA CNPJ: 55899359000134 ENDEREÇO: avenida Mauro Ramos, 1450, sala 503 RESPONSÁVEL LEGAL: Mauricio Pereira CPF: 03487336901 EMAIL: mauricio@mpadvogados.adv.br Cep 88023002, Centro, Florianópolis";

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.max(250, textareaRef.current.scrollHeight)}px`;
    }
  }, [prompt]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsSubmitting(true);
    setShowFakeLoading(true);
    setStatus({ type: null, message: '' });

    const now = new Date();
    const submittedAt = now.toISOString();

    const payload = [
      {
        "Insira aqui os dados para a IA gerar o contrato.": prompt,
        "submittedAt": submittedAt,
        "formMode": "production"
      }
    ];

    try {
      // Start the actual request and the fake timer simultaneously
      const [response] = await Promise.all([
        fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }),
        new Promise(resolve => setTimeout(resolve, 3000)) // Fictitious 3-second delay
      ]);

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: (
            <div className="animate-fade-in">
              <p className="mb-2">Sua solicitação foi enviada com sucesso!</p>
              <p className="text-[10px] leading-relaxed opacity-80">
                O processo pode levar até 2 minutos para conclusão. 
                Por favor aguarde, em breve será subido no Autentique e o arquivo estará disponível no{' '}
                <a 
                  href="https://drive.google.com/drive/u/2/folders/1TLBkR8gqVmozLV__hBM8IzpCroGUabof" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline hover:text-white transition-colors"
                >
                  Google Drive
                </a>.
              </p>
            </div>
          ) 
        });
        setPrompt('');
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ 
        type: 'error', 
        message: <span className="animate-fade-in">Houve um erro ao enviar sua solicitação. Verifique sua conexão.</span> 
      });
    } finally {
      setIsSubmitting(false);
      setShowFakeLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900/40 border border-white/5 p-6 md:p-10 shadow-2xl rounded-sm backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label 
            htmlFor="contract-prompt" 
            className="block text-xs font-bold text-gray-400 uppercase tracking-[0.2em]"
          >
            Dados para Geração do Contrato
          </label>
          
          <div className="relative group">
            <textarea
              id="contract-prompt"
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={placeholderText}
              className="w-full min-h-[250px] bg-black border border-white/10 p-6 text-white text-base leading-relaxed focus:outline-none focus:border-gold transition-all duration-300 resize-none font-light placeholder:text-gray-700"
              disabled={isSubmitting}
            />
            
            <div className="absolute bottom-4 right-4 flex items-center gap-3 text-[10px] text-gray-600 uppercase tracking-widest font-medium">
              <span>{prompt.length} caracteres</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button
            type="submit"
            disabled={isSubmitting || !prompt.trim()}
            className={`
              relative overflow-hidden w-full py-5 text-xs font-bold uppercase tracking-[0.3em] transition-all duration-300
              ${isSubmitting || !prompt.trim() 
                ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed border border-white/5' 
                : 'bg-gold text-black hover-bg-gold shadow-[0_4px_20px_rgba(212,167,63,0.15)]'}
            `}
          >
            <span className="relative z-10">
              {isSubmitting ? 'PROCESSANDO...' : 'ENVIAR PARA AUTOMAÇÃO N8N'}
            </span>
            {showFakeLoading && (
              <div className="absolute bottom-0 left-0 h-1 bg-black/30 w-full">
                <div className="h-full bg-white/50 animate-progress"></div>
              </div>
            )}
          </button>

          {status.type && (
            <div className={`p-6 w-full text-center text-xs font-bold uppercase tracking-widest border transition-all ${
              status.type === 'success' 
                ? 'bg-green-900/10 border-green-500/50 text-green-400' 
                : 'bg-red-900/10 border-red-500/50 text-red-400'
            }`}>
              {status.message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContractForm;
