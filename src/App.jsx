import ReceipeList from './pages/recipies'
import CommentsList from './pages/comments'
import { Routes, useNavigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import RecipeDetailsPage from './pages/recipe-details'
import NotFoundPage from './pages/not-found'
import Layout from './components/layout'
import { Children } from 'react'
import { useRoutes } from 'react-router-dom'
import ReactHookFormExamplePage from './pages/react-hook-form-example'
import Hooks from './pages/hooks'
import UseMemoExample from './pages/hooks/use-memo-example'
import UseCallbackExample from './pages/hooks/use-callback-example'
import ReactQueryDemo from './pages/hooks/react-query'

function App () {
  function CustomRoutes () {
    const element = useRoutes([
      {
        path: '/home',
        element: <Layout />,
        children: [
          { path: 'recipe-list', element: <ReceipeList /> },
          { path: 'comments-list', element: <CommentsList /> },
          { path: 'recipe-list/:id', element: <RecipeDetailsPage /> },
          { path: 'react-hook-form', element: <ReactHookFormExamplePage /> },
          { path: 'hooks', element: <Hooks /> },
          { path: 'memo', element: <UseMemoExample /> },
          { path: 'callback', element: <UseCallbackExample /> },
          { path: 'react-query-demo', element: <ReactQueryDemo /> }
        ]
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ])

    return element
  }

  const navigate = useNavigate()

  return (
    <div>
      {/* <h1>React routing, Custom hooks and more</h1>

      <div>
        <Link to={'/home/recipe-list'}>
          Alternate way of navigating to recipe list
        </Link>
        <Link to={'/home/comments-list'}>
          Alternate way of navigating to comments list
        </Link>
      </div>

      <button
        onClick={() => {
          navigate('/home/recipe-list')
        }}
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        Navigate to Recipe List page
      </button>
      <button
        onClick={() => {
          navigate('/home/comments-list')
        }}
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        Navigate to Comments List page
      </button> */}

      {/* <Routes>
        <Route path='/home' element={<Layout />}>
          <Route path='recipe-list' element={<ReceipeList />} />
          <Route path='comments-list' element={<CommentsList />} />
          <Route path='recipe-list/:id' element={<RecipeDetailsPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes> */}

      <CustomRoutes />
    </div>
  )
}

export default App
