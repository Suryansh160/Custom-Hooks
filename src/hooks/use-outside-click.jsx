import { useEffect } from 'react'

function useOutsideClick (ref, handler) {
  useEffect(() => {
    function handleClick (event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler()
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [ref, handler])
}

export default useOutsideClick
