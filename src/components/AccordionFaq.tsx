import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

export default function AccordionFaq() {
  const [faqs, setFaqs] = React.useState<FaqItem[]>([]);

  React.useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  if (!faqs.length) return null;

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
