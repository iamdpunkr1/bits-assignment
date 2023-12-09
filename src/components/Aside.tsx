const Aside = () => {
    return (
      <aside className="bg-gray-700 px-4 py-4 h-4/12 w-2/12 rounded-r-md overflow-hidden">
        <div className="flex items-center justify-center">
        <svg width={20}
            height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C13 4.89543 13.8954 4 15 4H18C19.1046 4 20 4.89543 20 6V9C20 10.1046 19.1046 11 18 11H15C13.8954 11 13 10.1046 13 9V6ZM18 6H15V9H18V6ZM6 13C4.89543 13 4 13.8954 4 15V18C4 19.1046 4.89543 20 6 20H9C10.1046 20 11 19.1046 11 18V15C11 13.8954 10.1046 13 9 13H6ZM6 15H9V18H6V15ZM15 13C13.8954 13 13 13.8954 13 15V18C13 19.1046 13.8954 20 15 20H18C19.1046 20 20 19.1046 20 18V15C20 13.8954 19.1046 13 18 13H15ZM15 15H18V18H15V15ZM6 4C4.89543 4 4 4.89543 4 6V9C4 10.1046 4.89543 11 6 11H9C10.1046 11 11 10.1046 11 9V6C11 4.89543 10.1046 4 9 4H6ZM6 6H9V9H6V6Z" fill="#ffffff"></path> </g></svg>
          <h1 className="xs:hidden sm:hidden md:hidden lg:block text-lg font-bold text-white transition-all duration-300 ease-in-out hover:text-gray-400">
            Dashboard
          </h1>
        </div>
      </aside>
    );
  };
  
  export default Aside;
  