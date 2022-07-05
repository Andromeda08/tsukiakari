import type { FC, ReactNode } from "react";

export const Badge : FC<{
  children: ReactNode;
  brand?: string;
}> = ({ children, brand }) => {
  const _brand: string = (brand) ? ('badge--' + brand) : '';
  return (
    <div className={ `badge${ ' ' + _brand }` }>
      { children }
    </div>
  );
};
