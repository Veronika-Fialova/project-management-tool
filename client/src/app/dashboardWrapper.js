"use client"

import React, { useEffect } from 'react'
import Navbar from "./components/Navbar"
import Sidebar from './components/Sidebar'
import StoreProvider, { useAppSelector } from "./redux"

const DashboardWrapper = ( {children} ) => {

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

    return (
        <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
          <Sidebar />
          <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
          isSidebarCollapsed ? "" : "md:pl-64"}`}>
            <Navbar />
            {children}
          </main>
        </div>
      );
    };

const AppWrapper = ( {children} ) => {
    return (
        <StoreProvider>
          <DashboardWrapper>{children}</DashboardWrapper>
        </StoreProvider>
      );
    };


export default AppWrapper