import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import MainScreen from './Screens/MainScreen.js'
import MovieScreen from './Screens/MovieScreen'
import ShowScreen from './Screens/ShowScreen'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={MainScreen} exact />
        <Route path='/movies/:movieid' component={MovieScreen} />
        <Route path='/shows/:showid' component={ShowScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App
