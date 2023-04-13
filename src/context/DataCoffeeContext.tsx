import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface DataCoffee {
  id: number
  coffeeImage: string
  type: string[]
  title: string
  subTitleCoffee: string
  price: number
}

export interface CreateDataBuyCoffees {
  id: number
  title: string
  coffeeImage: string
  price: number
  coffeeAmount: number
}

interface DataCoffeeContextType {
  dataCoffee: DataCoffee[]
  coffeeSoldData: CreateDataBuyCoffees[]
  fatchDataCoffee: () => Promise<void>
  fatchCoffeeSoldData: () => Promise<void>
  createCoffeeSoldData: (data: CreateDataBuyCoffees) => Promise<void>
}

interface DataCoffeeProviderProps {
  children: ReactNode
}

export const DataCoffeeContext = createContext<DataCoffeeContextType>(
  {} as DataCoffeeContextType,
)

export function DataCoffeeProvider({ children }: DataCoffeeProviderProps) {
  const [dataCoffee, setDataCoffee] = useState<DataCoffee[]>([])
  const [coffeeSoldData, setCoffeeSoldData] = useState<CreateDataBuyCoffees[]>(
    [],
  )

  const fatchDataCoffee = useCallback(async () => {
    const response = await api.get('coffees')

    setDataCoffee(response.data)
  }, [])

  const createCoffeeSoldData = useCallback(
    async (data: CreateDataBuyCoffees) => {
      const { id, title, coffeeImage, price, coffeeAmount } = data
      const response = await api.post('coffesBuyAdds', {
        id,
        title,
        coffeeImage,
        price,
        coffeeAmount,
      })

      setCoffeeSoldData((state) => [response.data, ...state])
    },
    [],
  )

  const fatchCoffeeSoldData = useCallback(async () => {
    const response = await api.get('coffesBuyAdds')

    setCoffeeSoldData(response.data)
  }, [])

  useEffect(() => {
    fatchDataCoffee()
  }, [fatchDataCoffee])

  useEffect(() => {
    fatchCoffeeSoldData()
  }, [fatchCoffeeSoldData])

  return (
    <DataCoffeeContext.Provider
      value={{
        dataCoffee,
        fatchDataCoffee,
        createCoffeeSoldData,
        coffeeSoldData,
        fatchCoffeeSoldData,
      }}
    >
      {children}
    </DataCoffeeContext.Provider>
  )
}
