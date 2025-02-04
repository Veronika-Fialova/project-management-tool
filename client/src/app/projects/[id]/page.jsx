
import Header from '@/app/components/Header';
import { supabase } from '../../../supabaseClient';
import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const fetchProjectData = async (id) => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();
  if (error) {
    throw new Error('Project not found or error fetching data');
  }
  return data;
};

const ProjectDetails = async ({ params }) => {
  const { id } = await params; 
  const project = await fetchProjectData(id); 

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
      <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
          <div className="pt-5">
            <Header name={project.name} buttonComponent={undefined}/>
          </div>

          {/* CUSTOMER INFO */}
          <div className="p-5 border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200">
            <details className="group">
              <summary className="cursor-pointer grid grid-cols-4 items-center gap-4">
                <p><strong>Customer:</strong> {project.customer}</p>
                <p><strong>Start Date:</strong> {project.startDate}</p>
                <p><strong>End Date:</strong> {project.endDate}</p>
                <span className="text-sm justify-self-end group-open:rotate-180 transform transition-transform">▼</span>
              </summary>
              <div className="cursor-pointer grid grid-cols-4 gap-4 mt-4">
                <p><strong>Description:</strong> {project.description}</p>
              </div>
            </details>
          </div>
          <div className="mt-10 mb-5 flex w-full items-center justify-between">
          </div>

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
          </div>
      </div>
  );
};

export default ProjectDetails;