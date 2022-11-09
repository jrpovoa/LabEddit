import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (initialData, url, setIsLoading) => {
    const [data, setData] = useState(initialData)
    
    useEffect(() => {
        setIsLoading(true)
        axios.get(url, {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((response) => {
            setData(response.data)
            setIsLoading(false)
        })
        .catch((error) => {
            setIsLoading(false)
            alert("Ocorreu um erro, tente novamente")
        })
    }, [url])

    return (data)
}

export default useRequestData