import  { useCallback, useEffect, useState } from 'react'

function useFetch(url, method ='GET', body =null, header =null) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState()
    const fetchData = useCallback(async() => {
        try {
            setIsLoading(true)
            const options = {
                method: method
            }
            if(body) {
                options.body = body
            }
            if(header) {
                options.header = header
            }
            const response = await fetch(url, options)
            const data = await response.json()
            if(response.ok){
                setIsSuccess(true)
                setData(data)
                setIsError(false)
                setError(null)
            }else {
                setError(data)
                setData(null)
                setIsError(true)
                setIsSuccess(false)
            }
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    },[])
    // useEffect(() => {
    //     fetchData()
    // },[])
  return {data, isLoading, isSuccess, isError, error, fetchData}
}

export default useFetch