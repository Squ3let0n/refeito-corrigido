import Home from "./pages/Home/Home";
import Carrossel from "./pages/Home/components/carousel";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/a" element={<Carrossel/>} />
      </Routes>
    </Router>
  );
}

export default App;
