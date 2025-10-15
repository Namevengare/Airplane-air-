import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Search from './pages/Search'
import Results from './pages/Results'
import Checkout from './pages/Checkout'

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}
