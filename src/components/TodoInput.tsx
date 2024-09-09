import { useState } from 'react'

interface TodoInputProps {
  addTask: (task: string) => void
}

const TodoInput: React.FC<TodoInputProps> = ({ addTask }) => {
  const [task, setTask] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!task.trim()) return

    addTask(task)
    setTask('')
  }

  return (
    <form className='form-input' onSubmit={handleSubmit}>
      <input type='text' placeholder='Add a new task' value={task} onChange={(e) => setTask(e.target.value)} />
      <button type='submit'>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 448 512'>
          <path
            fill='white'
            d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32'
          />
        </svg>
      </button>
    </form>
  )
}

export default TodoInput
