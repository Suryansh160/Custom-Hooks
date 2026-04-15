import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addNewProduct, fetchListOfProducts } from './api'
import { useState } from 'react'

function ReactQueryDemo () {
  const getQueryClient = useQueryClient()

  const { data: productList, isLoading } = useQuery({
    queryKey: ['productList'],
    queryFn: fetchListOfProducts
  })

  const [productTitle, setProductTitle] = useState('')

  const { mutateAsync: handleAddNewProductMutation } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      getQueryClient.invalidateQueries(['productList'])
    }
  })

  async function handleAddNewProduct () {
    await handleAddNewProductMutation(productTitle)
    setProductTitle('')
  }

  if (isLoading) return <h1>Loading</h1>

  return (
    <div>
      <h1>React Query Demo</h1>

      <div>
        <input
          type='text'
          value={productTitle}
          onChange={event => {
            setProductTitle(event.target.value)
          }}
          name='name'
          placeholder='Enter new Product'
        />
        <button
          onClick={handleAddNewProduct}
          disabled={productTitle.trim() === ''}
          type='button'
        >
          Add new Product
        </button>
      </div>

      <ul>
        {productList?.length > 0 ? (
          productList.map(product => <li key={product.id}>{product.title}</li>)
        ) : (
          <h3>No Product Found</h3>
        )}
      </ul>
    </div>
  )
}

export default ReactQueryDemo
