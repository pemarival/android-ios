import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Colors } from '@/src/constants/colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function AppNavigator() {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: palette.surface,
          },
          headerTitleStyle: {
            color: palette.text,
            fontWeight: '700',
          },
        }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="buttons" options={{ title: 'Botones' }} />
        <Stack.Screen name="dropdown" options={{ title: 'Dropdown' }} />
        <Stack.Screen name="calculator" options={{ title: 'Calculadora' }} />
        <Stack.Screen name="scroll-loading" options={{ title: 'Scroll loading' }} />
        <Stack.Screen name="profile" options={{ title: 'Perfil' }} />
        <Stack.Screen name="settings" options={{ title: 'Ajustes' }} />
        <Stack.Screen name="detail" options={{ title: 'Detalle' }} />
      </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
