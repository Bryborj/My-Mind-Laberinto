import React from "react";

interface LayoutDashboardProps {
  childrenL: React.ReactNode;
  childrenR: React.ReactNode;
}

const LayoutDashboard: React.FC<LayoutDashboardProps> = ({ childrenL, childrenR }) => {
  return (
    <div className="min-h-screen w-full flex flex-row bg-[var(--color-background)]">
      {/* Contenido principal */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="border bg-[var(--my-mind-p1-green-color)]">{childrenL}</div>
        <div className="border bg-[var(--my-mind-p3-blue-color)]">{childrenR}</div>
        
      </main>
    </div>
  );
};

export default LayoutDashboard;
