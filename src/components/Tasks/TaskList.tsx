import ActiveTasks from "../../pages/ActiveTasks";
import CompletedTasks from "../../pages/CompletedTasks";
import FailedTasks from "../../pages/FailedTasks";
import NewTasks from "../../pages/NewTasks";

function TaskList({ data }: any) {
  return (
    <div className="p-10">
      <div className="overflow-x-auto py-5 no-scrollbar">
        <div className="flex flex-nowrap gap-5">
          {data.tasks.map((elem: any,idx:number) => {
            if (elem.active) {
              return <ActiveTasks data={data} key = {idx} />;
            } else if (elem.complete) {
              return <CompletedTasks data={data} key = {idx} />;
            } else if (elem.new) {
              return <NewTasks data={data} key = {idx} />;
            } else if (elem.failed) {
              return <FailedTasks data={data} key = {idx}/>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
