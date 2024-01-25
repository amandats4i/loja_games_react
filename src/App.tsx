import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListarCategorias from './components/categorias/listarCatergorias/listarCategorias';
import DeletarCategoria from './components/categorias/deletarCategorias/deletarCategorias';
import FormCategorias from './components/categorias/formCategorias/formCategorias';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-screen" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastroCategoria" element={<FormCategorias />} />
            <Route path="/editarCategoria/:id" element={<FormCategorias />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App;