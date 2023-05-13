import React from 'react';
import { BsSunFill ,BsFillMoonStarsFill} from "react-icons/bs";
import useDarkMode from './hooks/useDarkMode';


const Navbar = () => {

  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <>
    <div className='flex justify-between bg-opacity-20  bg-gray-400 sticky top-0'>
      <div className='flex justify-between'>
        <img className='star' src='../star.png' alt='star'/>
    <p className='font-bold  p-4 text-sm font-playball dark:text-white'>Redefine Status</p>
    </div>
   
      
    <div className='flex justify-between '>
    <input type='text' placeholder='Search' className=' placeholder:italic placeholder:text-zinc-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm font-bold font-sourcecodepro p-4 mr-4 rounded-lg bg-white h-4 mt-3'></input>
    <button onClick={handleMode}>{darkTheme ? (
        <BsSunFill size='24' className='top-navigation-icon text-white' />
      ) : (
        <BsFillMoonStarsFill size='24' className='top-navigation-icon' />
      )}</button>
    
    </div>
    
    </div>

    </>
  )
}

export default Navbar;