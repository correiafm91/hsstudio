
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    instagram: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_forms')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          area: Number(formData.area),
          instagram: formData.instagram
        }]);

      if (error) throw error;

      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        area: '',
        instagram: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-darkgray mb-12">Solicite um orçamento</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nome"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral/20 transition-all duration-300"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral/20 transition-all duration-300"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <input
              type="tel"
              placeholder="WhatsApp"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral/20 transition-all duration-300"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <input
              type="text"
              placeholder="Instagram (opcional)"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral/20 transition-all duration-300"
              value={formData.instagram}
              onChange={(e) => setFormData({...formData, instagram: e.target.value})}
            />
            <input
              type="number"
              placeholder="Área aproximada (m²)"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral/20 transition-all duration-300"
              value={formData.area}
              onChange={(e) => setFormData({...formData, area: e.target.value})}
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-coral text-white py-4 rounded-lg hover:bg-coral/90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
