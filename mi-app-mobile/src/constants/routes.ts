export const routes = {
  home: '/',
  explore: '/explore',
  buttons: '/buttons',
  modal: '/modal',
  dropdown: '/dropdown',
  calculator: '/calculator',
  scrollLoading: '/scroll-loading',
  profile: '/profile',
  settings: '/settings',
  detail: '/detail',
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
