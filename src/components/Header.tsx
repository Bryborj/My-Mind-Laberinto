import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { Home, AppWindow, Menu, MoreHorizontal } from "lucide-react";

export default function Header() {
  const user = useUser();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <motion.header
      initial={{ x: -120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-[var(--color-card)] text-[var(--color-card-foreground)] border-b border-[var(--color-border)] fixed top-0 left-0 z-50 shadow-lg"
    >
      <nav className="max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-between relative">
        {/* Responsive: menú hamburguesa en móvil */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex items-center gap-2 lg:hidden"
        >
          <button
            className="p-2 rounded-md hover:bg-[var(--my-mind-p1-green-color)] focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </motion.div>
        {/* Navegación a la izquierda, oculta en móvil */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:flex items-center gap-2"
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link
                    to="/"
                    className={`flex items-center gap-2 hover:text-blue-500 transition-all ${
                      location.pathname === "/" ? "glass-active" : ""
                    }`}
                  >
                    <Home className="w-5 h-5" />
                    <span className="hidden md:inline-block text-sm font-semibold">
                      Inicio
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link
                    to="/Dashboard"
                    className={`flex items-center gap-2 transition-all ${
                      location.pathname === "/Dashboard" ? "glass-active" : ""
                    }`}
                  >
                    <AppWindow className="w-5 h-5" />
                    <span className="hidden md:inline-block text-sm font-semibold">
                      App
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <MoreHorizontal className="w-5 h-5" />
                  <span className="hidden md:inline-block text-sm font-semibold ml-1">
                    Más
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <Link
                      to="/Dashboard"
                      className={`flex items-center gap-2 transition-all ${
                        location.pathname === "/Habits" ? "glass-active" : ""
                      }`}
                    >
                      <AppWindow className="w-5 h-5" />
                      <span className="hidden md:inline-block text-sm font-semibold">
                        Habitos
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>
        {/* Menú móvil desplegable */}
        {open && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-16 left-0 w-full bg-[var(--color-card)] shadow-lg flex flex-col gap-2 px-4 py-4 lg:hidden z-40"
          >
            <Link
              to="/"
              className="flex items-center gap-2 py-2"
              onClick={() => setOpen(false)}
            >
              <Home className="w-5 h-5" />
              <span className="text-sm font-semibold">Inicio</span>
            </Link>
            <Link
              to="/Dashboard"
              className="flex items-center gap-2 py-2"
              onClick={() => setOpen(false)}
            >
              <AppWindow className="w-5 h-5" />
              <span className="text-sm font-semibold">App</span>
            </Link>
            <div className="flex items-center gap-2 py-2">
              <MoreHorizontal className="w-5 h-5" />
              <span className="text-sm font-semibold">Más</span>
            </div>
          </motion.div>
        )}
        {/* Perfil a la derecha, siempre visible y sobresaliendo del header */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 fixed right-4 top-4 z-50"
        >
          <SignedIn>
            <span className="bg-[var(--my-mind-p3-blue-color)] text-[var(--my-mind-p4-text-color)] px-4 py-1 rounded-full shadow font-semibold text-sm border border-[var(--my-mind-p1-green-color)]">
              {user.user?.firstName}
            </span>
            <div className="bg-[var(--my-mind-p2-melon-color)] shadow-xl rounded-full p-1 border-2 border-[var(--my-mind-p1-green-color)] -ml-3">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: { width: 48, height: 48 },
                    userButtonTrigger: { minWidth: 48, minHeight: 48 },
                  },
                }}
              />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </motion.div>
      </nav>
    </motion.header>
  );
}
