import { ReactNode } from 'react';

function TaskContext({ children }: { children: ReactNode }) {
  return (
    <div>{children}</div>
  )
}

export default TaskContext