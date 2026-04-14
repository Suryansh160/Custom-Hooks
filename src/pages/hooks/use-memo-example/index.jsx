import { Link } from 'react-router-dom'
import useFetch from '../../../hooks/use-fetch'
import { useState } from 'react'
import { useMemo } from 'react'

function UseMemoExample () {
  const { data, loading } = useFetch('https://dummyjson.com/products')
  const [flag, setFlag] = useState(false)

  function filterProductByPrice (getProduct) {
    return getProduct?.length > 0
      ? getProduct.filter(singleItem => singleItem.price > 50)
      : []
  }

  const memorizedVersion = useMemo(() => filterProductByPrice(data?.products),[data?.products])

  if (loading) return <h1>Loading</h1>

  return (
    <div>
      <h1 style={{ color: flag ? 'blue' : 'violet' }}>Use Memo</h1>

      <button onClick={() => setFlag(!flag)}>Toggle</button>
      <ul>
        {memorizedVersion.map(item => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseMemoExample
