import './App.css'
import { Routes, Route } from "react-router"
import Home from './components/Home';
import Fullproject from './pages/Fullproject';

function App() {


  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Fullproject" element={<Fullproject/>} />
      </Routes>
    </>
  )
}

export default App
