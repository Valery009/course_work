import { Link } from "react-router-dom"


const NavBar = () => {
    return (


            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              
               
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        <li>
                            <Link to="/" className="block py-2 px-3 text-white rounded  md:text-blue-700 md:p-0" aria-current="page">Новини</Link>
                        </li>
                        <li>
                            <Link to="/about" className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Про сайт</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Галерея</Link>
                        </li>
                        <li>
                            <Link to="/contacts" className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Контакти</Link>
                        </li>
                
                    </ul>
                </div>
            </div>

    );
};

export default NavBar;
