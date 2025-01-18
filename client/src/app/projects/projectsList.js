import {useEffect, useState} from 'react'

import {supabase} from '../supabaseClient'
import Image from 'next/image'

function ProjectsList() {

  const [projects, setProjects] = useState(null)

  useEffect(
    () => {
      getProjects()
    },
    []
  )

  const getProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select()

    if (error !== null) {
      console.log(error.message)
      return
    }

    setProjects(data)
  }

  return (
    <>
      {
        projects === null
        ? <p>Načítám data...</p>
        : <ul>
            {projects.map(project => (
              <li key={project.id}>
                <Image src={"/projecticon.png"} alt={`${project.name} icon`} width={15} height={15}/>
                <h3 className={`font-medium text-gray-800 dark:text-gray-100`}>{project.name}</h3>
              </li>
            ))}
          </ul>
      }

    </>
  )
}

export default ProjectsList