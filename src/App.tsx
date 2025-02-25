import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blogs } from './pages/Blogs';
import { Home } from './pages/Home';
import { PortfolioProvider } from './context/PortfolioContext';
import { NavBar } from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <PortfolioProvider>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
      </PortfolioProvider>
    </BrowserRouter>
  );
}

export default App
