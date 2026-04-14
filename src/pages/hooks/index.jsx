import { useEffect, useRef } from 'react'

function Hooks () {
  const countValue = useRef(0)
  const divElementRef = useRef()
  const inputRefElement = useRef()

  function handleClick () {
    countValue.current++
  }

  useEffect(() => {
    const getDivReference = divElementRef.current
    inputRefElement.current.focus()

    getDivReference.style.color = 'red'

    setTimeout(() => {
      getDivReference.style.color = 'green'
    }, 2000)
  }, [])

  return (
    <div>
      <h1>Use ref,use callback and useMemo hooks</h1>

      <button onClick={handleClick}>Click me</button>

      <div ref={divElementRef}>Random text</div>

      <input name='name' placeholder='Enter your name' ref={inputRefElement} />
    </div>
  )
}

export default Hooks
