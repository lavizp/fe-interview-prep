import { Routes, Route, Link } from 'react-router-dom'
import MovieBooking from './pages/movie'

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
        <Link to="/">Home</Link> | <Link to="/movie">Movie Booking</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieBooking />} />
      </Routes>
    </div>
  )
}

export default App
