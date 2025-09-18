import { Routes, Route, Link } from 'react-router-dom'
import MovieBooking from './pages/movie'
import SelectGame from './pages/select'

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>About</h1>
}

function App() {

  return (
        <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/movie">Movie Booking</Link> | <Link to={'/select'}>Select</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieBooking />} />
        <Route path="/select" element={<SelectGame/>} />
      </Routes>
    </div>
  )
}

export default App
