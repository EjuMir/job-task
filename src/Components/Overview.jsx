

function Overview() {
  const courses = [
    {
      title: 'Foundations of User Experience (UX) Design',
      progress: 80,
    },
    {
      title: 'Start the UX Design Process: Empathize, Define, and Ideate',
      progress: 65,
    },
    {
      title: 'Build Wireframes and Low-Fidelity Prototypes',
      progress: 85,
    },
    {
      title: 'Build Wireframes and Low-Fidelity Prototypes',
      progress: 85,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2 mt-6">
      {courses.map((course, index) => (
        <div
          key={index}
          className="p-6 bg-blue-50 rounded-lg shadow-lg space-y-4"
        >
          <h3 className="text-lg font-semibold text-gray-700">{course.title}</h3>
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className="bg-blue-600 h-6 rounded-full flex items-center justify-center text-white text-sm"
              style={{ width: `${course.progress}%` }}
            >
              {course.progress}%
            </div>
          </div>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Continue Course
          </button>
        </div>
      ))}
    </div>
  );
}

export default Overview;
