import Link from 'next/link';

interface Props {
  href: string;
}

export const NavigationItem : React.FC<Props> = ({ href }) => {
  return (
    <Link href={ `#${ href }` } >
      <a className='navigation__item'>
        /{ href }
      </a>
    </Link>
  );
} 