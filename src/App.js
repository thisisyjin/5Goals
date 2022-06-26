import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import Awards from './pages/Awards';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
