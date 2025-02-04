"use client"

import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/app/state'
import { 
    Briefcase,  
    HouseIcon,  
    ListTodo, 
    LockIcon, 
    SettingsIcon, 
    UserIcon, 
    UsersIcon, 
    X } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const dispatch = useAppDispatch()
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed,
  );

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white 
    ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`

  return (
    <div className={sidebarClassNames}>
        <div className="flex h-[100%] w-full flex-col justify-start">

            {/* TOP LOGO */}
            <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                {isDarkMode ? (
                    <Image className="pl-2" src="/altepro-white-green.png" alt="ALTEPRO logo" width={130} height={30}/>
                ): (
                    <Image className="pl-2" src="/altepro_logo.jpeg" alt="ALTEPRO logo" width={130} height={30}/>
                )}
                
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
            <SidebarLink href="/" icon={HouseIcon} label="Home" />
            <SidebarLink href="/projects" icon={Briefcase} label="Projects" />
            <SidebarLink href="/tasks" icon={ListTodo} label="Tasks" />
            <SidebarLink href="/settings" icon={SettingsIcon} label="Settings" />
            <SidebarLink href="/users" icon={UserIcon} label="Users" />
            <SidebarLink href="/teams" icon={UsersIcon} label="Teams" />
            </nav>
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
                <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-altepro-light-green" />
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