
import Header from '@/app/components/Header';
import { supabase } from '../../supabaseClient';

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

const ProjectDetails = async ({ params, isSmallText = false }) => {
  const { id } = params; 
  const project = await fetchProjectData(id); 

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
      <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
          <div className="pt-5">
            <Header
              name={project.name}
            />
          </div>
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
            <h2 className={`${isSmallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white`}>
            Tasks
            </h2>
          </div>
      </div>
  );
};

export default ProjectDetails;