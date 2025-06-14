/**
 * Routeador de las paginas de la aplicación.
 * Este archivo define las rutas principales de la aplicación utilizando React Router.
 * Las rutas incluyen la página de inicio y una página de "Acerca de".
 * Puedes agregar más rutas según sea necesario.
 * Asegúrate de que los componentes Home y About estén importados correctamente.
 * Puedes personalizar las rutas y los componentes según tus necesidades.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LayoutHome from "@/layouts/Layout-Home";
//import About from "./pages/About";

const NotFound = () => <h1>404 - Page Not Found</h1>;

function App() {
  return (
    <Router>
      <>
        <LayoutHome>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LayoutHome>
      </>
    </Router>
  );
}

export default App;
