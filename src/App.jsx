import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AnalyticsCards from "./components/AnalyticsCards";
import ChartComponent from "./components/ChartComponent";
import TableComponent from "./components/TableComponent";

export default function App() {
  return (
    <div className="flex h-screen w-screen bg-gray-100">

      <Sidebar />

      <div className="flex flex-col flex-1 bg-gray-100 p-6 ml-20 md:ml-16">
        <Header />


        <div className="w-full">
          <AnalyticsCards />
        </div>

  
        <div className="bg-white p-6 mt-6 shadow-md rounded-lg w-full">
          <h2 className="text-lg font-bold">Monthly Overview</h2>
          <ChartComponent />
        </div>

     
        <div className="bg-white p-6 mt-6 rounded-lg w-full">
          <TableComponent />
        </div>
      </div>
    </div>
  );
}
