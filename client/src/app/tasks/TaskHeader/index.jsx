import React from 'react'
import Header from '../../components/Header'
import { Filter, Grid3x3, Share2, Table } from 'lucide-react';
import TableView from '../TableView';
import BoardView from '../BoardView';

const TasksHeader = ({ activeTab, setActiveTab }) => {
    return (
        <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
          <div className="pt-5">
            <Header
              name="Tasks"
            />
        </div>
    
        {/* TABS */}
        <div className="flex flex-wrap-reverse gap-2 border-y border-gray-200 pb-[8px] pt-2 dark:border-stroke-dark md:items-center">
            <div className="flex flex-1 items-center gap-2 md:gap-4">
              <TabButton
                name="Board"
                icon={<Grid3x3 className="h-5 w-5" />}
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
              <TabButton
                name="Table"
                icon={<Table className="h-5 w-5" />}
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
          </div>
            <div className="flex items-center gap-2">
              <button className="text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300">
                <Filter className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300">
                <Share2 className="h-5 w-5" />
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Task"
                  className="rounded-md border py-1 pl-10 pr-4 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white"
                />
                <Grid3x3 className="absolute left-3 top-2 h-4 w-4 text-gray-400 dark:text-neutral-500" />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          {activeTab === 'Board' && <BoardView />}
          {activeTab === 'Table' && <TableView />}
        </div>
      );
    };

const TabButton = ({ name, icon, setActiveTab, activeTab }) => {
    const isActive = activeTab === name;
      
    return (
          <button
            className={`relative flex items-center gap-2 px-1 py-2 text-gray-500 after:absolute after:-bottom-[9px] after:left-0 after:h-[1px] after:w-full hover:text-blue-600 dark:text-neutral-500 dark:hover:text-white sm:px-2 lg:px-4 ${
              isActive ? "text-blue-600 after:bg-blue-600 dark:text-white" : ""
            }`}
            onClick={() => setActiveTab(name)}
          >
            {icon}
            {name}
          </button>
        );
      };

export default TasksHeader