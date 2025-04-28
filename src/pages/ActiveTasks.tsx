function ActiveTasks({data}:any) {
  return (
    <div className="p-10">
        <div className="overflow-x-auto py-5 no-scrollbar">
          <div className="flex flex-nowrap gap-5">
            {/* Task Card 1 */}
            <div className="flex-shrink-0 w-[320px] h-[350px] bg-blue-400 rounded-lg shadow-md hover:shadow-lg transition p-5">
              <div className="flex items-end justify-between">
                <h3 className=" rounded-xl bg-amber-500 font-bold p-1 px-4">{data.tasks[0].category}</h3>
                <h4 className="p-1">{data.tasks[0].date}</h4>
              </div>
              <h1 className="text-2xl font-semibold mt-10 mb-10">{data.tasks[0].title}</h1>
              <p className="text-gray-600">{data.tasks[0].description}</p>
            <div className="flex mt-4 p-4 items-end justify-between">
              <button className="text-xs rounded-xl border-1 bg-green-500 px-2 py-1 cursor-pointer">Mark as Completed</button>
              <button className="rounded-xl border-1 text-xs bg-red-500 px-2 py-1 cursor-pointer">Mark as Failed</button>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ActiveTasks