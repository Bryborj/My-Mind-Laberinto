import AccordionFaq from "@/components/AccordionFaq";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-lg mb-4">
        This is the home page of your React application. You can customize this page with your content.
      </p>
      <p className="text-sm text-gray-600">
        Use Tailwind CSS classes to style your components easily.
      </p>
      <AccordionFaq />
    </div>
  );
}