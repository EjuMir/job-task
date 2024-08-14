
function Activity() {
  const data = [
    { month: 'Jan', video: 8, practice: 5 },
    { month: 'Feb', video: 7, practice: 6 },
    { month: 'Mar', video: 6, practice: 7 },
    { month: 'Apr', video: 5, practice: 8 },
    { month: 'May', video: 8, practice: 6 },
    { month: 'Jun', video: 9, practice: 7 },
    { month: 'Jul', video: 6, practice: 8 },
    { month: 'Aug', video: 7, practice: 9 },
    { month: 'Sep', video: 8, practice: 5 },
    { month: 'Oct', video: 6, practice: 7 },
    { month: 'Nov', video: 5, practice: 6 },
    { month: 'Dec', video: 7, practice: 8 },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700">Course Activity</h3>
      <div className="mt-6">
        <div className="grid grid-cols-12 gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Video Bar */}
              <div
                className="w-4 bg-blue-600 rounded-t-md"
                style={{ height: `${item.video * 10}px` }} // Adjust height scaling
              ></div>
              {/* Practice Bar */}
              <div
                className="w-4 bg-blue-300 rounded-t-md mt-1"
                style={{ height: `${item.practice * 10}px` }} // Adjust height scaling
              ></div>
              {/* Month Label */}
              <span className="text-sm text-gray-500 mt-2">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activity;
