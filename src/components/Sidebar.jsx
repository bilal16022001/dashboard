export default function Sidebar() {
  return (
    <aside className="w-20 h-screen bg-[#1A1E2D] text-white flex flex-col justify-between items-center py-4 space-y-6 fixed left-0 top-0 text-xs">
   
      <div className="flex flex-col items-center space-y-4">
   
        <div className="w-12 h-12 bg-green-600 flex items-center justify-center rounded-md">
          <img src="/path-to-your-logo.png" alt="Logo" className="w-6 h-6" />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="🔍 Se..."
            className="w-14 bg-[#2A2E3E] text-white text-[10px] px-2 py-1 rounded-md focus:outline-none placeholder-gray-400"
          />
        </div>

        <button className="w-12 h-12 flex items-center justify-center bg-[#2A2E3E] rounded-md">
          ⏹️
        </button>
 
        <button className="w-12 h-12 flex items-center justify-center text-gray-400">
          👤
        </button>
      </div>


      <div className="mt-auto flex flex-col space-y-3 pb-4">
        <button className="w-12 h-12 flex items-center justify-center text-gray-400">
          👥
        </button>
        <button className="w-12 h-12 flex items-center justify-center text-gray-400">
          ⚙️
        </button>

   
        <div className="w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full text-white font-bold">
          N
        </div>
      </div>
    </aside>
  );
}
