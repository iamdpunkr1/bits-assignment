
const Navbar = () => {
  return (
    <nav className="bg-[#d8c3a5] px-8 py-4 w-full mb-2">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-700">BITS</h1>
            <div className="flex items-center">
                <p className="text-gray-700 mr-4">Welcome, <span className="font-bold">John Doe</span></p>
                <button className="bg-[#eae7dc] text-gray-700 hover:text-[#eae7dc] hover:bg-gray-700 px-4 py-2 rounded-md shadow-md">
                Logout
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar