// src/pages/Home.tsx
import AccordionFaq from "@/components/AccordionFaq";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a Mi Sitio Web</h1>
      <p className="text-lg mb-4">
        Esta es la página de inicio de tu aplicación React. Puedes personalizar esta página con tu contenido.
      </p>
      <p className="text-sm text-gray-600">
        Usa clases de Tailwind CSS para estilizar tus componentes fácilmente.
      </p>
      <AccordionFaq />
    </div>
  );
}