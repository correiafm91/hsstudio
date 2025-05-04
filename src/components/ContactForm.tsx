
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    instagram: '',
    businessType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    "Loja de varejo",
    "Escritório corporativo",
    "Clínica médica/odontológica",
    "Restaurante/Cafeteria",
    "Salão de beleza",
    "Hotel/Pousada",
    "Academia/Estúdio",
    "Coworking",
    "Consultório",
    "Outro"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Submitting form data:", formData);
      
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone || !formData.area) {
        throw new Error("Por favor, preencha todos os campos obrigatórios");
      }

      const { error } = await supabase
        .from('contact_forms')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          area: Number(formData.area) || 0,
          message: formData.businessType ? `${formData.instagram} - ${formData.businessType}` : formData.instagram
          // Removed business_type field as it doesn't exist in the database schema
        }]);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        area: '',
        instagram: '',
        businessType: ''
      });
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Erro ao enviar formulário",
        description: error.message || "Por favor, tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-darkgray mb-12 text-center">Solicite um orçamento</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="Nome"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral/20 transition-all duration-300"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <Input
                type="email"
                placeholder="E-mail"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral/20 transition-all duration-300"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <Input
              type="tel"
              placeholder="WhatsApp"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral/20 transition-all duration-300"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <Input
              type="text"
              placeholder="Instagram (opcional)"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral/20 transition-all duration-300"
              value={formData.instagram}
              onChange={(e) => setFormData({...formData, instagram: e.target.value})}
            />
            <Select
              value={formData.businessType}
              onValueChange={(value) => setFormData({...formData, businessType: value})}
            >
              <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral/20 transition-all duration-300">
                <SelectValue placeholder="Tipo de negócio" />
              </SelectTrigger>
              <SelectContent>
                {businessTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              placeholder="Área aproximada (m²)"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral/20 transition-all duration-300"
              value={formData.area}
              onChange={(e) => setFormData({...formData, area: e.target.value})}
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-coral text-white py-4 rounded-lg hover:bg-coral/90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
