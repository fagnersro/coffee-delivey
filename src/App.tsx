import { globalStyles } from './styles/global'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
globalStyles()

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  )
}
