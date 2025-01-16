"use client"

import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/app/state'
import { 
    AlertCircle, 
    AlertOctagon, 
    AlertTriangle, 
    ChevronDown, 
    ChevronUp, 
    HistoryIcon, 
    HouseIcon, 
    Layers3Icon, 
    Link, 
    LockIcon, 
    SearchIcon, 
    SettingsIcon, 
    ShieldAlert, 
    UserIcon, 
    UsersIcon, 
    X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true)
    const [showPriority, setShowPriority] = useState(true)

    const dispatch = useAppDispatch()
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed,
  );

    const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white 
    ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`

  return (
    <div className={sidebarClassNames}>
        <div className="flex h-[100%] w-full flex-col justify-start">

            {/* TOP LOGO */}
            <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                ALTEPRO
                </div>
                {isSidebarCollapsed ? null : (
                    <button className="py-3" onClick={() => {dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}}>
                        <X className='h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white' />
                    </button>
                )}
            </div>

            {/* TEAM */}
            <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
                <Image src="/salesteamlogo.png" alt="Sales team logo" width={40} height={40}/>
                <div>
                    <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
                    SALES TEAM
                    </h3>
                    <div className="mt-1 flex items-start gap-2">
                        <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
                        <p className="text-xs text-gray-500">Private</p>
                    </div>
                </div>
            </div>

            {/* NAVBAR LINKS */}
            <nav className="z-10 w-full">
                <div className='flex items-center px-2 py-2 font-medium'>
                    <HouseIcon label="Home" href="/" /> 
                    <span className='px-2'>Home</span>
                </div>
                <div className='flex items-center px-2 py-2 font-medium'>
                    <HistoryIcon label="Timeline" href="/timeline" /> 
                    <span className='px-2'>Timeline</span>
                </div>
                <div className='flex items-center px-2 py-2 font-medium'>
                    <SearchIcon label="Search" href="/search" /> 
                    <span className='px-2'>Search</span>
                </div>
                <div className='flex items-center px-2 py-2 font-medium'>
                    <SettingsIcon label="Settings" href="/settings" /> 
                    <span className='px-2'>Settings</span>
                </div>
                <div className='flex items-center px-2 py-2 font-medium'>
                    <UserIcon label="Users" href="/users" /> 
                    <span className='px-2'>Users</span>
                </div>
                <div className='flex items-center px-2 py-2 font-medium'>
                    <UsersIcon label="Teams" href="/teams" /> 
                    <span className='px-2'>Teams</span>
                </div>
            </nav>

             {/* PROJECT LINKS */}
            <button onClick={() => setShowProjects((prev) => !prev)}
                className='flex w-full items-center justify-between px-8 py-3 text-gray-500'>
                    <span className="">Projects</span>
                    {showProjects ? (
                        <ChevronUp className='h-5 w-5' />
                    ) : (
                        <ChevronDown className='h-5 w-5' />
                    )}
            </button>

            {/* PROJECT LIST */}

            {/* PRIORITY LINKS */}
            <button onClick={() => setShowPriority((prev) => !prev)}
                className='flex w-full items-center justify-between px-8 py-3 text-gray-500'>
                    <span className="">Priority</span>
                    {showPriority ? (
                        <ChevronUp className='h-5 w-5' />
                    ) : (
                        <ChevronDown className='h-5 w-5' />
                    )}
            </button>
            {showPriority && (
                <>
                <div className='flex items-center px-2 py-2 font-medium'> 
                    <AlertCircle label="Urgent" href="/priority/urgent" />
                    <span className='px-2'>Urgent</span>
                </div>
                <div className='flex items-center px-2 py-2 font-medium'> 
                    <ShieldAlert label="High" href="/priority/high" />
                    <span className='px-2'>High</span>
                </div>
                <div className='flex items-center px-2 py-2 font-medium'> 
                    <AlertTriangle label="Medium" href="/priority/medium" />
                    <span className='px-2'>Medium</span>
                </div>
                <div className='flex items-center px-2 py-2 font-medium'> 
                    <AlertOctagon label="Low" href="/priority/low" />
                    <span className='px-2'>Low</span>
                </div>
                <div className='flex items-center px-2 py-2 font-medium'> 
                    <Layers3Icon label="Backlog" href="/priority/backlog" />
                    <span className='px-2'>Backlog</span>
                </div>
                </>
            )}
        </div> 
    </div>
  )
}

const SidebarLink = ({ href, icon: Icon, label }) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

    return (
        <Link href={href} className="w-full">
            <div
            className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
            } justify-start px-8 py-3`}
            >
            {isActive && (
                <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200" />
            )}
  
            <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
            <span className={`font-medium text-gray-800 dark:text-gray-100`}>
                {label}
            </span>
            </div>
      </Link>
    );
}

export default Sidebar