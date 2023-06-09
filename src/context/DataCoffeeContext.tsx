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

interface updateQuantityOfCoffeesType {
  coffeeAmount: number
}

interface CoffeeDataSuccess {
  rua: string
  numero: number
  bairro: string
  cidade: string
  uf: string
  payType: string
  id: number
}

interface DataCoffeeContextType {
  dataCoffee: DataCoffee[]
  coffeeSoldData: CreateDataBuyCoffees[]
  coffeeDataSuccess: CoffeeDataSuccess[]
  removeLoading: boolean
  receiveCoffeeDataSuccess: (data: CoffeeDataSuccess) => Promise<void>
  fatchDataCoffee: () => Promise<void>
  fatchCoffeeSoldData: () => Promise<void>
  createCoffeeSoldData: (data: CreateDataBuyCoffees) => Promise<void>
  deleteCoffeeSold: (idCofeeSold: number) => Promise<void>
  updateQuantityOfCoffees(
    data: updateQuantityOfCoffeesType,
    id: number,
  ): Promise<void>
}

interface DataCoffeeProviderProps {
  children: ReactNode
}

export const DataCoffeeContext = createContext<DataCoffeeContextType>(
  {} as DataCoffeeContextType,
)

export function DataCoffeeProvider({ children }: DataCoffeeProviderProps) {
  const [removeLoading, setRemoveLoading] = useState(false)
  const [dataCoffee, setDataCoffee] = useState<DataCoffee[]>([])
  const [coffeeSoldData, setCoffeeSoldData] = useState<CreateDataBuyCoffees[]>(
    [],
  )
  const [coffeeDataSuccess, setCoffeeDataSuccess] = useState<
    CoffeeDataSuccess[]
  >([])

  const fatchDataCoffee = useCallback(async () => {
    const response = await api.get('coffees')

    setDataCoffee(response.data)
  }, [])

  const fatchCoffeeSoldData = useCallback(async () => {
    const response = await api.get('coffesBuyAdds')

    setCoffeeSoldData(response.data)
    setRemoveLoading(false)
  }, [])

  const fatchCoffeeDataSuccess = useCallback(async () => {
    const response = await api.get('coffeeDataSuccess')

    setCoffeeDataSuccess(response.data)
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

  const deleteCoffeeSold = useCallback(
    async (idCofeeSold: number) => {
      const response = await api.delete(`coffesBuyAdds/${idCofeeSold}`)
      setRemoveLoading(true)
      setCoffeeSoldData((state) => [...state, response.data])
      fatchCoffeeSoldData()
    },
    [fatchCoffeeSoldData],
  )

  const updateQuantityOfCoffees = useCallback(
    async (data: updateQuantityOfCoffeesType, id: number) => {
      setRemoveLoading(true)
      const { coffeeAmount } = data
      const response = await api.patch(`coffesBuyAdds/${id}`, {
        coffeeAmount,
      })

      setCoffeeSoldData((state) => [...state, response.data])
      fatchCoffeeSoldData()
    },
    [fatchCoffeeSoldData],
  )

  const receiveCoffeeDataSuccess = useCallback(
    async (data: CoffeeDataSuccess) => {
      const { rua, numero, bairro, cidade, uf, payType, id } = data
      const response = await api.patch(`coffeeDataSuccess/${id}`, {
        rua,
        numero,
        bairro,
        cidade,
        uf,
        payType,
        id,
      })

      setCoffeeDataSuccess([response.data])
    },
    [],
  )

  useEffect(() => {
    fatchDataCoffee()
  }, [fatchDataCoffee])

  useEffect(() => {
    fatchCoffeeSoldData()
  }, [fatchCoffeeSoldData])

  useEffect(() => {
    fatchCoffeeDataSuccess()
  }, [fatchCoffeeDataSuccess])

  return (
    <DataCoffeeContext.Provider
      value={{
        dataCoffee,
        coffeeSoldData,
        coffeeDataSuccess,
        receiveCoffeeDataSuccess,
        removeLoading,
        fatchDataCoffee,
        fatchCoffeeSoldData,
        createCoffeeSoldData,
        deleteCoffeeSold,
        updateQuantityOfCoffees,
      }}
    >
      {children}
    </DataCoffeeContext.Provider>
  )
}
