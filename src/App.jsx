import './App.css'
import { Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />}>
        <Route path="/" element={<>test2</>} />
        <Route path="/test3" element={<>test3</>} />
      </Route>
    </Routes>
  )
}

export default App
