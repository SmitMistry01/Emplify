import TaskList from '../../Tasks/TaskList';
import Header from '../Header';
import TaskStatus from './../Admin/TaskStatus';

function EmpDash() {
  return (
    <>
        <Header/>
        <TaskStatus/>
        <TaskList/>
    </>
    
  );
}

export default EmpDash;
