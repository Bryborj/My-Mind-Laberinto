//import LayoutDashboard from "@/layouts/Layout-Dashboard";
import { AppContentCard } from "@/components/ui/AppContentCart";
import { AppContentBlock } from "@/components/ui/AppContentBlock";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard | My mind";
  }, []);

  // Estado para controlar el textarea y la visibilidad
  const [editando, setEditando] = useState(false);
  const [texto, setTexto] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
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
              className="min-h-[400px] lg:min-h-[500px]"
            >
              <AppContentBlock
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
              <AppContentBlock
                size="md"
                variant="pill"
              ></AppContentBlock>
              <AppContentBlock size="md" variant="pill" />
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
              <AppContentBlock
                color="green"
                size="md"
                variant="pill"
                className="hover:bg-accent "
              >
                <div>
                  <h2 className="text-lg font-semibold">Laberinto</h2>
                </div>
              </AppContentBlock>
              <AppContentBlock
                color="green"
                size="full"
                variant="rectangle"
                className="bg-white"
              >
                {/* Si no está editando y no hay texto, muestra el mensaje centrado */}
                {!editando && !texto && (
                  <div
                    className="flex flex-col items-center justify-center h-24 cursor-pointer"
                    onClick={() => setEditando(true)}
                  >
                    <p className="text-sm text-gray-700">
                      Hola, escribeme lo que paso hoy en tu dia.
                    </p>
                  </div>
                )}
                {/* Si está editando o ya hay texto, muestra el textarea y el mensaje arriba */}
                {(editando || texto) && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full"
                  >
                    <p className="text-xs text-gray-500 mb-1">
                      Hola, escribeme lo que paso hoy en tu dia.
                    </p>
                    <Textarea
                      autoFocus
                      value={texto}
                      onChange={(e) => setTexto(e.target.value)}
                      placeholder="Type your message here..."
                      className="w-full h-24 resize-none"
                      onBlur={() => {
                        if (!texto) setEditando(false);
                      }}
                    />
                  </motion.div>
                )}
              </AppContentBlock>
              <AppContentBlock
                color="green"
                size="full"
                variant="rectangle"
                className="bg-white"
              />
            </AppContentCard>
          </motion.div>
        </div>
      </div>
    </>
  );
}
