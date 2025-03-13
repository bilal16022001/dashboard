
export default function Header() {

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <h1 className="text-xl font-bold">Welcome back, Ted</h1>
  

<div class="dropdown dropdown-end">
  <div tabindex="0" role="button" class="btn m-1">Admin  ▼</div>
  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
  <li><a className="text-black">Profile</a></li>
    <li><a className="text-black">Settings</a></li>
    <li><a className="text-black">Logout</a></li>
  </ul>
</div>
    </div>
  );
}
