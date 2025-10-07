import { user } from "../data/mockuser";
import { BellIcon, UserCircleIcon, Cog6ToothIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Header({title}){
    return(
<>
<header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
    <h1 className="text-2xl font-bold text-green-600">{title}</h1>
    
   
       <div className="absolute left-1/2 transform -translate-x-1/2 w-40 sm:w-60 md:w-96 lg:w-[500px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-800"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
         <div className="flex items-center space-x-4">
        <BellIcon className="w-6 h-6 text-green-900 hover:text-black cursor-pointer" />
        <Cog6ToothIcon className="w-6 h-6 text-green-900 hover:text-black cursor-pointer" />
        <div className="flex items-center space-x-2">
          <UserCircleIcon className="w-8 h-8 text-green-900" />
          <span className="font-medium text-green-900 font-bold">{user.name}</span>
        </div>
        </div>
</header>
</>
    );
}