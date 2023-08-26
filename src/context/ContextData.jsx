import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const DataContext = createContext()

const DataProvider = ({children}) => {


    const [data, setData] = useState('')
    
    useEffect(() => {
        const axiosData = async () => {
            const endpoint = 'https://api.bluelytics.com.ar/v2/latest'
            const response = await axios.get(endpoint)
            setData(response.data)
        }
        axiosData()
    }, [])


    const addProperty = (property) => {
        console.log('se envio al localstorage');
    }
    

    return(
        <DataContext.Provider value={{data, addProperty}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;