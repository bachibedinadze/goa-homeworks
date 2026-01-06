export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-blue-600 font-bold">
            ⌘
          </div>
          Tailwind tap
        </div>

        {/* Right side - Menu */}
        <ul className="flex gap-8 text-white text-sm">
          <li className="cursor-pointer hover:underline">Components</li>
          <li className="cursor-pointer hover:underline">Templates</li>
          <li className="cursor-pointer hover:underline">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}