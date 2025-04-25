import TaskList from '../../Tasks/TaskList';
import AdminHeader from '../Admin/AdminHeader';
import TaskLists from '../Admin/TaskLists';

function EmpDash() {
  return (
    <>
        <AdminHeader/>
        <TaskLists/>
        <TaskList/>
    </>
    
  );
}

export default EmpDash;
