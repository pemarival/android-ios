import { useState } from 'react';
import { Switch, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { ScreenSurface } from '@/src/components/ui/ScreenSurface';
import { InfoCard } from '@/src/components/ui/InfoCard';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  const [notifications, setNotifications] = useState(true);
  const [compactMode, setCompactMode] = useState(false);
  const [syncEnabled, setSyncEnabled] = useState(true);

  return (
    <ScreenSurface>
      <View style={styles.header}>
        <Text style={[styles.title, { color: palette.text }]}>Ajustes</Text>
        <Text style={[styles.subtitle, { color: palette.muted }]}>Preferencias del demo con controles simples y claros.</Text>
      </View>

      <InfoCard title="Preferencias" description="Estos toggles pueden crecer sin cambiar la estructura general.">
        <SettingRow label="Notificaciones" value={notifications} onValueChange={setNotifications} />
        <SettingRow label="Modo compacto" value={compactMode} onValueChange={setCompactMode} />
        <SettingRow label="Sincronización" value={syncEnabled} onValueChange={setSyncEnabled} />
      </InfoCard>
    </ScreenSurface>
  );
}

function SettingRow({ label, value, onValueChange }: { label: string; value: boolean; onValueChange: (value: boolean) => void }) {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <View style={[styles.row, { borderColor: palette.border }]}>
      <Text style={[styles.rowLabel, { color: palette.text }]}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 14,
  },
  rowLabel: {
    fontSize: 15,
    fontWeight: '700',
  },
});
