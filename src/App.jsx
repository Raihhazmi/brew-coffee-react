import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedDrinks from './components/FeaturedDrinks'
import Story from './components/Story'
import MenuSection from './components/MenuSection'
import Community from './components/Community'
import DailyDeal from './components/DailyDeal'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <FeaturedDrinks />
      <Story />
      <MenuSection />
      <Community />
      <DailyDeal />
      <Footer />
    </div>
  )
}

export default App
