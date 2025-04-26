function TaskStatus({data}:any) {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
        <div className="h-50 w-1/4 bg-yellow-300 p-5 rounded-2xl ">
            <h2 className="text-3xl font-semibold">{data.taskStats.new}</h2>
            <h1 className="text-3xl font-bold mt-10">New Task</h1>
        </div>
        <div className="h-50 w-1/4 bg-blue-300 p-5 rounded-2xl ">
            <h2 className="text-3xl font-semibold">{data.taskStats.active}</h2>
            <h1 className="text-3xl font-bold mt-10">Active Task</h1>
        </div>
        <div className="h-50 w-1/4 bg-green-400 p-5 rounded-2xl ">
            <h2 className="text-3xl font-semibold">{data.taskStats.completed}</h2>
            <h1 className="text-3xl font-bold mt-10">Completed Task</h1>
        </div>
        <div className="h-50 w-1/4 bg-red-400 p-5 rounded-2xl ">
            <h2 className="text-3xl font-semibold">{data.taskStats.failed}</h2>
            <h1 className="text-3xl font-bold mt-10">Failed Task</h1>
        </div>
    </div>
  )
}

export default TaskStatus