import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const DataContext = createContext()

const DataProvider = ({children}) => {


    const [data, setData] = useState('')
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        const axiosData = async () => {
            const endpoint = 'https://api.bluelytics.com.ar/v2/latest'
            const response = await axios.get(endpoint)
            setData(response.data)
        }
        axiosData()
    }, [])


    

    
    

    return(
        <DataContext.Provider value={{data, setFilteredData, filteredData}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;