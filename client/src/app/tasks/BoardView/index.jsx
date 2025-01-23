"use client"

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BoardView = () => {
  return (
      <div className="container h-full w-[100%] bg-gray-100 bg-transparent p-8">

          {/* TABS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="rounded-lg bg-altepro-green bg-opacity-20 p-4 shadow relative">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                Initiation
              </h3>
              <div className="dark:text-white">
              <p>Project goals & feasibility</p>
              <p>Stakeholder register</p>
              <p>Project charter</p>
              <p>Kickoff meeting</p>
              <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-800 dark:text-white"/>
              </div>
            </div>
            <div className="rounded-lg bg-altepro-green bg-opacity-40 p-4 shadow relative">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                Planning
              </h3>
              <div className="dark:text-white">
              <p>Scope & budget</p>
              <p>Deadlines</p>
              <p>Team roles</p>
              <p>Communication plan</p>
              <p>Milestones</p>
              <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-800 dark:text-white"/>
              </div>
            </div>
            <div className="rounded-lg bg-altepro-green bg-opacity-60 p-4 shadow relative">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                Execution
              </h3>
              <div className="dark:text-white">
              <p>Task completion</p>
              <p>Team collaboration</p>
              <p>Efficient workflows</p>
              <p>Status report & meetings</p>
              <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-800 dark:text-white"/>
              </div>
            </div>
            <div className="rounded-lg bg-altepro-green bg-opacity-80 p-4 shadow relative">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                Monitoring & control
              </h3>
              <div className="dark:text-white">
              <p>Budget & tinmeline</p>
              <p>Project goals</p>
              <p>Quality control</p>
              <p>Team performance</p>
              <p>Risk management</p>
              <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-800 dark:text-white"/>
              </div>
            </div>
            <div className="rounded-lg bg-altepro-green p-4 shadow relative">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                Closure
              </h3>
              <div className="dark:text-white">
              <p>Retrospective meeting</p>
              <p>Project closure report</p>
              <p>Team celebration</p>
              <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-800 dark:text-white"/>
              </div>
            </div>

            {/* PROJECT PHASE*/}
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
              <h3 className="mb-4 text-lg font-semibold dark:text-white">
                TASK
              </h3>
              <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
            </div>
          </div>
      </div>
  )
}

export default BoardView