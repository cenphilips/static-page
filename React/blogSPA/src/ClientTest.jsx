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
      // Refetch settings
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      // Automatic refetch every 3 seconds
      refetchInterval: 3000,

      // Retry settings
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    })
  return (
    <div>
      <h2>Client Test Component</h2>
      {isLoading && <p>Loading user data...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {data && (
        <div>
          <h3>User Details:</h3>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
        </div>
      )}
    </div>
  )
}

export default ClientTest