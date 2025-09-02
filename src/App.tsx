import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blogs } from './pages/Blogs';
import { Home } from './pages/Home';
import { PortfolioProvider } from './context/PortfolioContext';
import { NavBar } from './components/NavBar';
import { Projects } from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <PortfolioProvider>
        <>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </>
      </PortfolioProvider>
    </BrowserRouter>
  );
}

export default App
