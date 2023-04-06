import { globalStyles } from './styles/global'
import Navbar from './components/Navbar'
globalStyles()

export default function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  )
}
