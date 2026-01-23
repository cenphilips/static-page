import React from 'react'
import { useQuery } from '@tanstack/react-query'

const ClientTest = () => {
    const getUserData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        return res.json()
    }
    const { data, error, isLoading } = useQuery({
        queryKey: ['userData'],
        queryFn: getUserData,
        
    })
  return (
    <div>ClientTest</div>
  )
}

export default ClientTest