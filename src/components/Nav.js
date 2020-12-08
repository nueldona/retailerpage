import logo from '../logo-via-logohub.png'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>

      <nav className="bg-black">
          <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8 justify-center">
            <div className="flex items-center h-16 justify-center">
              <div className="flex items-center justify-between">
                <div className="flex-shrink-0">

                  {/* nav Brand */}
                  <img className="h-10 w-18" src={ logo } alt="Workflow" />
                </div>

                {/* navlist */}
                <div className="hidden md:block ml-12">
                  <div className="ml-10 flex items-baseline space-x-3">

                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Team</a>

                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Projects</a>

                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Calendar</a>

                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Reports</a>
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">

                 {/* Mobile menu button */}
                <button className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className= "sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                    {/* Heroicon name: x

                    Menu open: "block", Menu closed: "hidden" */}
                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          
        </nav>
    </header>
  );
}
