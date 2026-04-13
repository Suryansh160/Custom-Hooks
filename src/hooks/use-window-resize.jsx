import { useLayoutEffect, useState } from 'react'

function useWindowResize () {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  })

  function handleResize () {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowResize
