// src/components/AccordionFaq.tsx
import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import useStaticJSONFetch from "@/hooks/useStaticJSONFetch"; // Ensure correct path

type FaqItem = {
  question: string;
  answer: string;
};

export default function AccordionFaq() {
  const { data: faqs, loading, error } = useStaticJSONFetch<FaqItem[]>("/faq.json");

  if (loading) return <p className="text-center py-4">Cargando preguntas frecuentes...</p>; // Spanish text
  if (error) return <p className="text-center py-4 text-red-600">Error al cargar las preguntas frecuentes. Por favor, inténtelo más tarde.</p>; // Spanish text
  if (!faqs || faqs.length === 0) return null; // Or a message like "No FAQs available"

  return (
    <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto my-8">
      {faqs.map((faq, idx) => (
        <AccordionItem value={`item-${idx}`} key={idx}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
