// A generic function to get data from localStorage
export function getLocalStorageItem<T>(key: string, initialValue: T): T {
  const savedData = localStorage.getItem(key)
  return savedData ? JSON.parse(savedData) : initialValue
}

// A generic function to save data to localStorage
export function setLocalStorageItem<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value))
}
