function AllTasks() {
    return (
      <div className="h-[270px] w-full overflow-auto mt-8 space-y-3 p-1 no-scrollbar">
        {/* Task Card 1 */}
        <div className="bg-cyan-50 hover:bg-cyan-100 flex justify-between items-center p-4 rounded-lg border border-cyan-200 shadow-sm transition-colors duration-200">
          <h1 className="font-medium text-gray-700 min-w-[100px]">Smit</h1>
          <h2 className="text-gray-800 flex-1 px-4">Create a UI design</h2>
          <h3 className="text-sm text-gray-500 min-w-[80px]">May 15, 2023</h3>
        </div>
  
        {/* Task Card 2 */}
        <div className="bg-cyan-50 hover:bg-cyan-100 flex justify-between items-center p-4 rounded-lg border border-cyan-200 shadow-sm transition-colors duration-200">
          <h1 className="font-medium text-gray-700 min-w-[100px]">Smit</h1>
          <h2 className="text-gray-800 flex-1 px-4">Create a UI design</h2>
          <h3 className="text-sm text-gray-500 min-w-[80px]">May 16, 2023</h3>
        </div>
  
        {/* Task Card 3 */}
        <div className="bg-cyan-50 hover:bg-cyan-100 flex justify-between items-center p-4 rounded-lg border border-cyan-200 shadow-sm transition-colors duration-200">
          <h1 className="font-medium text-gray-700 min-w-[100px]">Smit</h1>
          <h2 className="text-gray-800 flex-1 px-4">Create a UI design</h2>
          <h3 className="text-sm text-gray-500 min-w-[80px]">May 17, 2023</h3>
        </div>
  
        {/* Task Card 4 */}
        <div className="bg-cyan-50 hover:bg-cyan-100 flex justify-between items-center p-4 rounded-lg border border-cyan-200 shadow-sm transition-colors duration-200">
          <h1 className="font-medium text-gray-700 min-w-[100px]">Smit</h1>
          <h2 className="text-gray-800 flex-1 px-4">Create a UI design</h2>
          <h3 className="text-sm text-gray-500 min-w-[80px]">May 18, 2023</h3>
        </div>
  
        {/* Task Card 5 */}
        <div className="bg-cyan-50 hover:bg-cyan-100 flex justify-between items-center p-4 rounded-lg border border-cyan-200 shadow-sm transition-colors duration-200">
          <h1 className="font-medium text-gray-700 min-w-[100px]">Smit</h1>
          <h2 className="text-gray-800 flex-1 px-4">Create a UI design</h2>
          <h3 className="text-sm text-gray-500 min-w-[80px]">May 19, 2023</h3>
        </div>
      </div>
    );
  }
  
  export default AllTasks;