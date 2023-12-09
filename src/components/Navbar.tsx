
const Navbar = () => {
  return (
    <nav className="bg-[#d8c3a5] px-8 py-4 w-full mb-2">
        <div className="flex justify-between items-center">
            <div className="flex items-center">
            <svg
                height={26}
                width={26}
                fill="#545454"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.001 512.001"
                xmlSpace="preserve"
                stroke="#545454"
                >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                    {" "}
                    <g>
                        {" "}
                        <path d="M505.183,239.545L388.82,123.181L272.456,6.818c-9.087-9.089-23.824-9.089-32.912,0L123.18,123.181L6.817,239.545 c-9.089,9.089-9.089,23.824,0,32.912L123.18,388.821l116.364,116.364c4.544,4.544,10.501,6.816,16.457,6.816 c5.956,0,11.913-2.271,16.455-6.817L388.82,388.819l116.364-116.364C514.274,263.368,514.274,248.634,505.183,239.545z M256.001,56.187l83.451,83.45l-83.451,83.451l-83.451-83.451L256.001,56.187z M56.186,256l83.451-83.45L223.088,256 l-83.451,83.451L56.186,256z M256.001,455.815l-83.451-83.451l83.451-83.45l83.451,83.45L256.001,455.815z M372.364,339.452 L288.913,256l83.451-83.45L455.816,256L372.364,339.452z" />{" "}
                    </g>{" "}
                    </g>{" "}
                </g>
                </svg>
                <h1 className="ml-1 text-2xl font-bold text-gray-700">BITS</h1>
            </div>
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