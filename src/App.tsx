import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
// import Home from './pages/Home'
import { globalStyles } from './styles/global'

globalStyles()

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}
