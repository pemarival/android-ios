import { ReactNode } from 'react';

type DrawerNavigatorProps = {
  children: ReactNode;
};

export function DrawerNavigator({ children }: DrawerNavigatorProps) {
  return children;
}
