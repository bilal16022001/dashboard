import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AnalyticsCards from "./components/AnalyticsCards";
import ChartComponent from "./components/ChartComponent";
import TableComponent from "./components/TableComponent";

export default function App() {
  return (
    <div className="flex min-h-screen w-screen w-full bg-gray-100 overflow-x-hidden">

      <Sidebar />

      <div className="flex flex-col flex-1 bg-gray-100 p-6 ml-20 md:ml-16">
        <Header />


        <div className="w-full">
          <AnalyticsCards />
        </div>

  
        <>
  <div className="bg-white p-6 mt-5 border border-gray-300 rounded-lg w-full">
    <h2 className="text-lg font-bold">Monthly Overview</h2>
    <ChartComponent />
  </div>
  <hr className="mt-4 border-t border-gray-300 w-full" />
</>

     
        <div className="p-6  rounded-lg w-full">
          <TableComponent />
        </div>
      </div>
    </div>
  );
}
