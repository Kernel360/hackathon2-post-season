import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import IndexPage from './pages/IndexPage'
import StadiumPage from './pages/StadiumPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/stadium/:stadiumName" element={<StadiumPage />} />
        <Route path="/test3" element={<>test3</>} />
      </Route>
    </Routes>
  )
}

export default App
