import { routes } from '@/src/constants/routes';
import type { FeatureRouteName } from '@/src/navigation/types';

export type FeatureTile = {
  title: string;
  description: string;
  route: FeatureRouteName;
  accent: string;
};

export const featureTiles: FeatureTile[] = [
  {
    title: 'Botones',
    description: 'Acciones, estados y variantes visuales.',
    route: routes.buttons,
    accent: '#2563EB',
  },
  {
    title: 'Modal',
    description: 'Panel emergente para contenidos puntuales.',
    route: routes.modal,
    accent: '#7C3AED',
  },
  {
    title: 'Dropdown',
    description: 'Selección de opciones con interacción simple.',
    route: routes.dropdown,
    accent: '#0891B2',
  },
  {
    title: 'Calculadora',
    description: 'Operaciones rápidas y validación de entrada.',
    route: routes.calculator,
    accent: '#DC2626',
  },
  {
    title: 'Scroll loading',
    description: 'Lista con carga progresiva y estados de espera.',
    route: routes.scrollLoading,
    accent: '#D97706',
  },
  {
    title: 'Perfil',
    description: 'Formulario simple con validación de correo.',
    route: routes.profile,
    accent: '#16A34A',
  },
  {
    title: 'Ajustes',
    description: 'Preferencias visuales y opciones del demo.',
    route: routes.settings,
    accent: '#0F766E',
  },
  {
    title: 'Detalle',
    description: 'Vista detallada para una selección concreta.',
    route: routes.detail,
    accent: '#111827',
  },
];

export const dropdownOptions = ['React Native', 'Expo Router', 'TypeScript', 'Responsive UI'];
