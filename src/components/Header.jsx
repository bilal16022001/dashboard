import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <h1 className="text-xl font-bold">Welcome back, Ted</h1>
      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
        >
          <span className=""> Admin</span>
          <span className="text-sm">▼</span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200">
            <ul className="text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
