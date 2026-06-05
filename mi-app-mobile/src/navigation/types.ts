export type AppRouteName =
  | '/'
  | '/explore'
  | '/buttons'
  | '/modal'
  | '/dropdown'
  | '/calculator'
  | '/scroll-loading'
  | '/profile'
  | '/settings'
  | '/detail';

export type FeatureRouteName = Exclude<AppRouteName, '/'>;

export type RootStackParamList = {
  '(tabs)': undefined;
  buttons: undefined;
  modal: undefined;
  dropdown: undefined;
  calculator: undefined;
  'scroll-loading': undefined;
  profile: undefined;
  settings: undefined;
  detail: { title?: string } | undefined;
};
