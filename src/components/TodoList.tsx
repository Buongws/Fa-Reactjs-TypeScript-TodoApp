import { Task } from '../types'

interface TodoListProps {
  tasks: Task[]
  deleteTask: (id: number) => void
  setFilter: (filter: string) => void
  toggleTasks: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ tasks, deleteTask, setFilter, toggleTasks }) => {
  return (
    <div>
      <div className='todoList'>
        <div className='filter'>
          <p>List:</p>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value='All'>All</option>
            <option value='To do'>To do</option>
            <option value='Done'>Done</option>
          </select>
        </div>
        <div>
          {tasks.map((task, index) => (
            <div key={task.id} className='task'>
              <span
                className='span-text'
                onClick={() => toggleTasks(task.id)}
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#9CA3AF' : '#000'
                }}
              >
                {index + 1}. {task.text}
              </span>
              <span className='delete' onClick={() => deleteTask(task.id)}>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                  <path fill='#b45309' d='M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z' />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoList
