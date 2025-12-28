export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          MiniProject
        </h1>

        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li className="hover:text-indigo-600 cursor-pointer">Home</li>
          <li className="hover:text-indigo-600 cursor-pointer">About</li>
          <li className="hover:text-indigo-600 cursor-pointer">Services</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}