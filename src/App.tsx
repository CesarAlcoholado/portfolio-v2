import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blogs } from './components/Blogs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="w-full h-screen flex flex-col">
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
