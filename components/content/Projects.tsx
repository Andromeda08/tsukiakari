import { Project } from '@Types/Project.type';
import { ProjectCard } from '@Components/cards/ProjectCard';

interface ProjectsProps {
  data: Project[];
}

export const Projects : React.FC<ProjectsProps> = ({ data }) => {
  return (
    <div className='section__projects' id='projects'>
      <div className="section__header">
        <h2>/projects</h2>
      </div>
      <div className='section__project__list'>
        {
          data.map((e: Project, i: number) => <ProjectCard project={ e } key={ i } />)
        }
      </div>
    </div>
  );
}