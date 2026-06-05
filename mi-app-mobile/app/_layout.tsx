import AppNavigator from '@/src/navigation/AppNavigator';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return <AppNavigator />;
}
