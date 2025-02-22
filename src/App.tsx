import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blogs } from './components/Blogs';
import { Home } from './pages/Home';
import { PortfolioProvider } from './context/PortfolioContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <PortfolioProvider>
        <div className="w-full h-screen flex flex-col">
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
