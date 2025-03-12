export default function AnalyticsCards() {
  const stats = [
      { title: "Total Applications", value: 24, change: "+7.1%", lastMonth: 20 },
      { title: "In Progress Applications", value: 24, change: "+7.1%", lastMonth: 20 },
      { title: "Approved Applications", value: 7, change: "+10%", lastMonth: 6 },
      { title: "Denied Applications", value: 4, change: "-33.1%", lastMonth: 3 },
  ];

  return (
      <> 
          <div className="flex justify-between items-center mt-3 mb-2">
                      <h2 className="text-lg font-bold mb-4">Analytics</h2>
              <select className="border rounded px-3 py-1">
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
              </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
              {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 shadow-md rounded-lg flex flex-col justify-between w-full">
                      <p className="text-sm text-gray-500">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <span className={`text-xs ${stat.change.includes("+") ? "text-green-500" : "text-red-500"} flex items-center`}>
                          {stat.change.includes("+") ? "🔼" : "🔽"} {stat.change}
                      </span>
                      <p className="text-xs text-gray-400">Last month: {stat.lastMonth}</p>
                  </div>
              ))}
          </div>
      </>
  );
}
