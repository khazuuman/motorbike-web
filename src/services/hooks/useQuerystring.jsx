import React, { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

function useQuerystring() {
    const [searchParams, setSearchParams] = useSearchParams()
    const createQueryString = useCallback((name, value) => {
        const newParams = new URLSearchParams(searchParams)
        if(Array.isArray(name) && Array.isArray(value)){
            newParams.set('page', '1')
            name.forEach((query, index) => {
                newParams.set(query, value[index])
            })
        }else {
            name !== 'page' && newParams.set('page', '1')
            newParams.set(name, value)
        }
        return setSearchParams(newParams.toString())
    },[searchParams])
    const deleteQueryString = useCallback(() => {
        const newParams = new URLSearchParams()
        newParams.set('page', '1')
        setSearchParams(newParams.toString())
    },[searchParams])
  return [createQueryString, deleteQueryString]
}

export default useQuerystring