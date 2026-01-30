import React from 'react'

const usePost = async (url, data) => {
    const res = await fetch(url, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if(!res.ok) {
                throw new Error("Failed to add user")
            }
  return res.json()
}

export default usePost