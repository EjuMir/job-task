
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Overview from './Components/Overview';
import Activity from './Components/Activity';
import Reminders from './Components/Reminders';
import CompletedCoursesCard from './Components/CompletedCoursesCard';
import CoursesInProgressCard from './Components/CoursesInProgressCard';

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <Header />
        <div className='flex flex-col lg:flex-row gap-3'>
          <div className='flex flex-1'>
            <Overview />
          </div>
        <div className="flex flex-1 flex-col gap-4 mt-6">
          <div className='grid grid-cols-2 gap-2'>
          <div className='flex'><CompletedCoursesCard /></div>
          <div className='flex'><CoursesInProgressCard /></div>
          </div>
          <div><Activity /></div>
          <div><Reminders /></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
