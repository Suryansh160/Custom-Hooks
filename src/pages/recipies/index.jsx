import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/use-fetch'
import useWindowResize from '../../hooks/use-window-resize'
import useLocalStorage from '../../hooks/use-local-storage'
import useCounter from '../../hooks/use-counter'

function ReceipeList () {
  const location = useLocation()

  const { data, loading, error } = useFetch('https://dummyjson.com/recipes')
  const windowSize = useWindowResize()
  const { theme, setTheme } = useLocalStorage('theme', 'white')
  const { count, increment } = useCounter()

  if (loading) return <h1>Fetching </h1>

  return (
    <div>
      <h1 style={{ color: windowSize.width < 768 ? 'pink' : 'white' }}>
        Recipe list page
      </h1>
      <h3>
        Current width {windowSize.width}, height {windowSize.height}
      </h3>

      {/* <button
        onClick={() => {
          theme === 'white' ? setTheme('black') : setTheme('white')
        }}
      >
        {theme}
      </button> */}

      <button
        onClick={() => {
          increment()
        }}
      >
        {count}
      </button>

      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes.map(recipeItem => (
              <div>
                <img src={recipeItem?.image} />{' '}
                <label>{recipeItem?.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  )
}

export default ReceipeList
