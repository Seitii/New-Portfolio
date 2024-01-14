import React from 'react'
import SectionHeading from '../sub/section-heading'
import { projectsData } from '@/constants/data'
import Project from './project';


export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div className='flex flex-col items-center justify-center'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index} >
            <Project {...project}/>
          </React.Fragment>))
      }
      </div>
    </section>
  );
}