import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

interface LayoutHomeProps {
  children: React.ReactNode;
}

const LayoutHome: React.FC<LayoutHomeProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="w-full max-w-[1200px] mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutHome;
