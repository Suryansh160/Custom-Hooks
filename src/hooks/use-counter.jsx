import { useState, useEffect } from 'react'

function useCounter () {
  const [count, setCount] = useState(0)

  function increment () {
    setCount(old => old + 1)
  }

  useEffect(() => {
    increment()
  }, [])

  return { count, increment }
}

export default useCounter
