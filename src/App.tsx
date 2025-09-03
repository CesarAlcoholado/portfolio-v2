
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blogs } from './pages/Blogs';
import { Home } from './pages/Home';
import { PortfolioProvider } from './context/PortfolioContext';
import { NavBar } from './components/NavBar';
import { Projects } from './pages/Projects'

function App() {

  return (
    <BrowserRouter>
      <PortfolioProvider>
        <div className="px-1">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </PortfolioProvider>
    </BrowserRouter>
  );
}

export default App
