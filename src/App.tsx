import { useState } from 'react'

import TodoTitle from './components/TodoTitle'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import { getLocalStorageItem, setLocalStorageItem } from './utils/localStorage'
import { Task } from './types'

import './styles/index.css'

const useLocalStorageData = <T,>(key: string, initialValue: T) => {
  // In this code I have apply the lazy initialization of the state value,
  // so that the value is only read from localStorage once when the component is mounted.
  const [data, setData] = useState<T>(() => getLocalStorageItem(key, initialValue))

  const saveData = (newData: T) => {
    setData(newData)
    setLocalStorageItem(key, newData)
  }
  // I have set as const because the return the tuple, I help the TypeScript to understand exactly the type of the return value.
  return [data, saveData] as const
}

const App: React.FC = () => {
  const [tasks, setTasks] = useLocalStorageData<Task[]>('tasks', [])
  const [filter, setFilter] = useState('All')

  const addTask = (task: string) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }])
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true
    if (filter === 'To do') return !task.completed
    if (filter === 'Done') return task.completed
    return true
  })

  return (
    <div className='container'>
      <TodoTitle />
      <TodoInput addTask={addTask} />
      <TodoList tasks={filteredTasks} deleteTask={deleteTask} setFilter={setFilter} toggleTasks={toggleTask} />
    </div>
  )
}

export default App
