import TaskList from '../../Tasks/TaskList';
import Header from '../Header';
import TaskStatus from './TaskStatus';

interface EmpDashProps{
  data:any;
  onLogout:() => void;
}
function EmpDash({data,onLogout}:EmpDashProps) {
  console.log(data);
  
  return (
    <>
        {/* <Header onLogout={onLogout} data={data} /> */}
        <TaskStatus data = {data}/>
        <TaskList data = {data}/>
    </>
    
  );
}

export default EmpDash;
