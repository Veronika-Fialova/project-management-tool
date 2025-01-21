import React from 'react'
import { Moon, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsDarkMode } from '@/app/state'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className='flex items-center justify-end bg-white px-4 py-3 dark:bg-black'>

      {/* Icons */}
      <div className='flex items-center'>
            <button
              onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
              className={
              isDarkMode 
              ? `rounded p-2 dark:hover:bg-gray-700`
              : `rounded p-2 hover:bg-gray-100`
              }
            >
              {isDarkMode ? (
                <Sun className='h-6 w-6 cursor-pointer dark:text-white' />
              ): (
                <Moon className='h-6 w-6 cursor-pointer dark:text-white' />
              )
              }
            </button>
            <Link
              href="/settings"
              className={
              isDarkMode 
              ? `h-min w-min rounded p-2 dark:hover:bg-gray-700`
              : `h-min w-min rounded p-2 hover:bg-gray-100`
              }>
              <Settings className="h-6 w-6 cursor-pointer dark:text-white"/>
            </Link>
            <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block'>
            </div>
      </div>
    </div>
  )
}

export default Navbar