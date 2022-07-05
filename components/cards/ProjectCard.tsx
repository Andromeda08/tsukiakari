import type { Project } from '@Types/Project.type';
import type { Tech } from '@Types/Technology.type';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Badge } from '@Components/Badge';

interface CardProps {
  project: Project;
  delay?: number;
}

export const ProjectCard : React.FC<CardProps> = ({ project, delay }) => {
  return (
    <motion.div
      className='card__project'
      whileHover={{ y: -16 }}
    >
      <div className='card__project__header'>
        <div className='image'>
          <img src={ project.icon } alt={ `${project.name} icon.` } />
        </div>
        <h4>{ project.name }</h4>
      </div>
      <div className='card__project__content'>
        <div className='description'>{ project.desc }</div>
        <div className='badges'>
          { project.github ? (<Link href={project.github}><a><FontAwesomeIcon icon={["fab", "github"]} /></a></Link>) : '' }
          { project.link ? (<Link href={project.link}><a><FontAwesomeIcon icon={["fas", "link"]} /></a></Link>) : '' }
          {project.tech ? (project.tech.map((e: Tech, i: number) => (<Badge brand={ e.color } key={ i }>{ e.name }</Badge>))) : ''}
        </div>
      </div>
    </motion.div>
  );
}