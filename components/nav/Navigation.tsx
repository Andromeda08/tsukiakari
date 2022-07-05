import { NavigationItem } from "./NavigationItem";

interface NavigationProps {
  anchors: string[];
}

export const Navigation : React.FC<NavigationProps> = ({ anchors }) => {
  return (
    <div className='navigation'>
      <div className='navigation__container'>
      {
        anchors.map((e: any, i: number) => {
          return <NavigationItem href={ e } key={ i } />
        })
      }
      </div>
    </div>
  );
}