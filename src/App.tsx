import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { globalStyles } from './styles/global'
import { DataCoffeeProvider } from './context/DataCoffeeContext'

globalStyles()

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DataCoffeeProvider>
          <Router />
        </DataCoffeeProvider>
      </BrowserRouter>
    </div>
  )
}
