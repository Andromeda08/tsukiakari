import { Navigation } from '@Components/nav/Navigation';
import { Footer } from '@Components/Footer';

export const Layout : React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className='app'>
      <Navigation anchors={['home', 'about', 'projects']} />
      <div className='content'>{ children }</div>
      <Footer />
    </div>
  );
}