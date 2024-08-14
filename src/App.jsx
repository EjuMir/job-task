
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Overview from './Components/Overview';
import Activity from './Components/Activity';
import Reminders from './Components/Reminders';

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <Header />
        <Overview />
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          <div><Activity /></div>
          <div><Reminders /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
