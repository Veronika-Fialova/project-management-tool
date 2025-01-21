"use client"

import React, { useState } from 'react'
import TasksHeader from './TaskHeader/index.jsx'

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('Board');

  return (
    <>
    <div>
      <TasksHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
    </div>
    </>
  )
}

export default Tasks