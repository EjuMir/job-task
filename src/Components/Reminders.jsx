
import { FaCheckCircle, FaClock, FaBook } from 'react-icons/fa';

function Reminders() {
  const reminders = [
    {
      type: 'Assignment - 1',
      due: '5 June 2024',
      faculty: 'Same Jhon',
      status: 'Done',
      icon: <FaCheckCircle className="text-blue-500" />,
    },
    {
      type: 'Quiz - 2',
      due: '5 Aug 2024',
      faculty: 'Jhon Ab',
      status: 'Coming',
      icon: <FaClock className="text-orange-500" />,
    },
    {
      type: 'Last Class',
      due: '5 June 2024',
      faculty: 'Kabir Same',
      status: 'Done',
      icon: <FaBook className="text-blue-500" />,
    },
    {
      type: 'Quiz - 2',
      due: '5 June 2024',
      faculty: 'Lee Jhon',
      status: 'Done',
      icon: <FaCheckCircle className="text-blue-500" />,
    },
    {
      type: 'Assignment - 4',
      due: '5 June 2024',
      faculty: 'Abraham Leo',
      status: 'Done',
      icon: <FaCheckCircle className="text-blue-500" />,
    },
    {
      type: 'Last Class',
      due: '5 June 2024',
      faculty: 'Atik Saw',
      status: 'Done',
      icon: <FaCheckCircle className="text-blue-500" />,
    },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Reminders</h3>
        <span className="text-sm text-gray-500">Monthly</span>
      </div>
      <table className="w-full text-left table-fixed">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="w-1/4 py-2">Type</th>
            <th className="w-1/4 py-2">Due</th>
            <th className="w-1/4 py-2">Faculty</th>
            <th className="w-1/4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reminders.map((reminder, index) => (
            <tr key={index} className="border-t border-gray-200 text-sm">
              <td className="py-2 flex items-center space-x-2">
                <span>{reminder.icon}</span>
                <span className="text-gray-700 font-medium">{reminder.type}</span>
              </td>
              <td className="py-2 text-gray-500">{reminder.due}</td>
              <td className="py-2 text-gray-500">{reminder.faculty}</td>
              <td
                className={`py-2 font-semibold ${
                  reminder.status === 'Done' ? 'text-blue-500' : 'text-orange-500'
                }`}
              >
                {reminder.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reminders;
