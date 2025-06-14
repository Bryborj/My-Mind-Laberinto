// src/pages/Dashboard.tsx
import { AppContentCard } from "@/components/ui/AppContentCard";
import { AppContentBlock } from "@/components/ui/AppContentBlock";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard | My mind";
  }, []);

  const [editando, setEditando] = useState(false);
  const [texto, setTexto] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const textAreaId = "dashboardTextoEntrada"; // ID for Textarea

  return (
    <>
      <div className="min-h-[calc(100vh-120px)] p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 h-full">
          {/* Left Section - Green Container */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-full"
          >
            <AppContentCard
              variant="green"
              className="min-h-[400px] lg:min-h-[500px]" // AppContentCard already has flex-col and gap
            >
              <AppContentBlock // Calendar container
                size="full"
                variant="rectangle"
                className="w-full min-h-0 min-w-0 flex items-center justify-center"
              >
                <AppContentBlock
                  color="blue"
                  size="full"
                  variant="rectangle"
                  className="h-full w-full min-h-0 min-w-0 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-lg border w-full h-full min-h-0 min-w-0"
                    />
                  </motion.div>
                </AppContentBlock>
              </AppContentBlock>
              {/* Empty AppContentBlocks removed, rely on AppContentCard's gap */}
            </AppContentCard>
          </motion.div>

          {/* Right Section - Blue Container */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-full"
          >
            <AppContentCard
              variant="blue"
              className="min-h-[400px] lg:min-h-[500px]"
            >
              <AppContentBlock // "Laberinto" title block
                color="green"
                size="md" // This sets a fixed height, ensure content fits or adjust
                variant="pill"
                className="hover:bg-accent" // Removed cursor-pointer as it's not directly interactive itself
              >
                <div>
                  <h2 className="text-lg font-semibold">Laberinto</h2>
                </div>
              </AppContentBlock>
              <AppContentBlock // Textarea container block
                color="green" // This seems to be a style choice, not interactive itself
                size="full"
                variant="rectangle"
                className="bg-white p-4" // Added padding for content
              >
                {!editando && !texto && (
                  <button // Changed div to button
                    className="flex flex-col items-center justify-center h-24 text-gray-700 text-sm w-full text-center"
                    onClick={() => setEditando(true)}
                  >
                    Hola, escríbeme lo que pasó hoy en tu día.
                  </button>
                )}
                {(editando || texto) && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full"
                  >
                    <label htmlFor={textAreaId} className="text-xs text-gray-500 mb-1">
                      Hola, escríbeme lo que pasó hoy en tu día.
                    </label>
                    <Textarea
                      id={textAreaId} // Added id
                      autoFocus
                      value={texto}
                      onChange={(e) => setTexto(e.target.value)}
                      placeholder="Escribe tu mensaje aquí..."
                      className="w-full h-24 resize-none"
                      onBlur={() => {
                        if (!texto) setEditando(false);
                      }}
                    />
                  </motion.div>
                )}
              </AppContentBlock>
              {/* The third AppContentBlock was empty, if it was for structure, ensure AppContentCard's flex handles it */}
              {/* If the last AppContentBlock was meant to be a specific empty styled area, it can be re-added with purpose */}
              {/* For now, assuming it was for spacing or an unused placeholder */}
            </AppContentCard>
          </motion.div>
        </div>
      </div>
    </>
  );
}
