import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import MainScreen from './Screens/MainScreen.js'
import MovieScreen from './Screens/MovieScreen'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/movie/:movieid' element={<MovieScreen />} />
          <Route path='/' element={<MainScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
