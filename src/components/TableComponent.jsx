import { useState } from "react";

export default function TableComponent() {
  const [activeTab, setActiveTab] = useState("New Apps");

  const tabs = ["New Apps", "Unassigned", "My Apps", "Warning"];

  const data = [
    {
      name: "John Smith",
      id: "#853081",
      email: "jsmith@gmail.com",
      product: "CC118",
      status: "Pending",
      assigned: "NCooper",
      date: "2/27/2023 3:06pm",
    },
  ];

  return (
    <div className="bg-white p-6 mt-6 shadow-md rounded-lg">
    
      <div className="flex justify-between items-center mb-4 bg-gray-100">
        <h2 className="text-lg font-bold">Application</h2>
       
        <div className="p-2 rounded-lg flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === tab
                  ? "bg-green-600 text-white"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left border-b">
              <th className="py-3 px-4">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="py-3 px-4">Full Name</th>
              <th className="px-4">App ID</th>
              <th className="px-4">Email</th>
              <th className="px-4">Product</th>
              <th className="px-4">Status</th>
              <th className="px-4">Assigned to</th>
              <th className="px-4">Create Date</th>
              <th className="px-4"></th> 
            </tr>
          </thead>
          <tbody>
            {Array(5).fill(data[0]).map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="py-3 px-4">{row.name}</td>
                <td className="px-4">{row.id}</td>
                <td className="px-4">{row.email}</td>

                <td className="px-4">
                  <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
                    {row.product}
                  </span>
                </td>

                <td className="px-4">
                  <span className="bg-amber-50 border border-amber-300 text-amber-600 text-xs px-3 py-1 rounded-full">
                    {row.status}
                  </span>
                </td>

                <td className="px-4">{row.assigned}</td>
                <td className="px-4">{row.date}</td>
                <td className="px-4 text-gray-500 cursor-pointer">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}