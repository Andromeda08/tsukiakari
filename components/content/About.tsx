import { motion } from 'framer-motion';

import type { Tech } from '@Types/Technology.type';
import { technologies } from '@Data/technologies';

export const About : React.FC = ({ }) => {
  return (
    <motion.div
      className='section__about'
      id='about'
      initial= {{ y: -16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: {
          duration: 0.25,
          ease: 'easeInOut'
      }}}
    >
      <div className='section__header'><h2>/about</h2></div>
      <div className='section__content'>
        <div>I am currently studying <b>Computer Engineering</b> at the <b>Budapest University of Technology</b>.</div>
        <div>
          In my free time I like playing volleyball and various video games, 
          listening to music and exploring technologies related to web development and computer graphics.
        </div>
        <div>
          Here are some of the technologies I&apos;m interested in and work with:
          <ul className='section__tech'>
            {
              technologies.map((e: Tech, i: number) => (
                <motion.li
                  className={ e.color }
                  key={ i }
                  initial={{ y: 4, opacity: 0 }} 
                  whileInView={{ y: 0, opacity: 1, transition: {
                    duration: 0.25,
                    delay: (i * 0.125),
                    ease: 'easeInOut'
                  }}}
                >
                  { e.name }
                </motion.li>
              ))
            }
          </ul>
        </div>
      </div>
    </motion.div>
  );
}