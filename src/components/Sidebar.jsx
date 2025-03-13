import logo from '../assets/logo.png';
import { Search } from "lucide-react";
import select from '../assets/select.png';
import profile from '../assets/profile.png';
import profile2 from '../assets/profile2.png';
import setting from '../assets/setting.png';
import Avatar from '../assets/Avatar.png';

export default function Sidebar() {
  return (
    <aside className="w-20 h-screen bg-[#1A1E2D] text-white flex flex-col justify-between items-center py-4 space-y-6 fixed left-0 top-0 text-xs">
   
      <div className="flex flex-col items-center space-y-4">

  <img src={logo} alt="Logo" className="border-none" />


  <div className="relative">
  <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
    <Search className="h-4 w-4 text-white-400" />
  </div>
  <input
    type="text"
    placeholder="Se..."
    className="w-14 bg-[#2A2E3E] text-white text-sm pl-8 pr-2 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 transition-all duration-200"
  />
</div>

<img src={select} alt="select"/>

<img src={profile} alt="profile"/>

      </div>


      <div className="mt-auto flex flex-col space-y-3 pb-4">
      <img src={profile2} alt="profile2"/>

      <img src={setting} alt="setting"/>


   
      <img
  src={Avatar}
  alt="Avatar"
  className="w-[64px] h-[42px]"
/>

      </div>
    </aside>
  );
}
