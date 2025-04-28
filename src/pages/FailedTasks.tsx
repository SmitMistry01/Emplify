function FailedTasks({data}:any) {
  return (
    <div className="p-10">
        <div className="overflow-x-auto py-5 no-scrollbar">
          <div className="flex flex-nowrap gap-5">
            {/* Task Card 1 */}
            <div className="flex-shrink-0 w-[320px] h-[350px] bg-red-400 rounded-lg shadow-md hover:shadow-lg transition p-5">
              <div className="flex items-end justify-between">
                <h3 className=" rounded-xl bg-red-500 font-bold p-1 px-4">{data.tasks[0].category}</h3>
                <h4 className="p-1">25 March 2025</h4>
              </div>
              <h1 className="text-2xl font-semibold mt-10 mb-10">Task</h1>
              <p className="text-gray-600">Description goes here...</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FailedTasks