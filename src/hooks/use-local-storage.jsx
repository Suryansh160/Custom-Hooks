import { useState } from "react"

function useLocalStorage (key, initialValue) {
  const [value, setValue] = useState(() => {
    const earlierValue = localStorage.getItem(key)
    return earlierValue ? JSON.parse(earlierValue) : initialValue
  })

  const setStoredValue = newValue => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return { theme: value, setTheme: setStoredValue }
}

export default useLocalStorage
