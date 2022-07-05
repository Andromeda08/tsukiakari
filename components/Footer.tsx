import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer : React.FC = ({ }) => {
  return (
    <div className='footer'>
      <p>created by Balázs Kovács</p>
      <p>-</p>
      <p>2022</p>
      <p>-</p>
      <div className='links'>
        <p className='github'>
          <Link href='https://github.com/Andromeda08'>
            <a><FontAwesomeIcon icon={["fab", "github"]} /></a>
          </Link>
        </p>
        <p className='discord'>
          <FontAwesomeIcon icon={["fab", "discord"]} />
          <span>Andromeda#9731</span>
        </p>
      </div>
    </div>
  );
}