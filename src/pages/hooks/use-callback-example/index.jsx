import { useCallback, useState } from 'react'
import Counter from './counter'

function UseCallbackExample () {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const memoriseSetCountOneFunction = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  )

    const memoriseSetCountTwoFunction = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  )

  return (
    <div>
      <h1>Use callback</h1>

      <Counter
        countValue={countOne}
        onClick={memoriseSetCountOneFunction}
      />
      <Counter
        countValue={countTwo}
        onClick={memoriseSetCountTwoFunction}
      />
    </div>
  )
}

export default UseCallbackExample
