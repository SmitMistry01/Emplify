import TaskList from '../../Tasks/TaskList';
import Header from '../Header';
import TaskStatus from './TaskStatus';

interface EmpDashProps{
  data:any;
}
function EmpDash({data}:EmpDashProps) {
  console.log(data);
  
  return (
    <>
        <Header data={data} />
        <TaskStatus data = {data}/>
        <TaskList data = {data}/>
    </>
    
  );
}

export default EmpDash;
