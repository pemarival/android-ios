import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { ScreenSurface } from '@/src/components/ui/ScreenSurface';
import { InfoCard } from '@/src/components/ui/InfoCard';
import { dropdownOptions } from '@/src/data/options';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function DropdownScreen() {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  const [selected, setSelected] = useState(dropdownOptions[0]);
  const [open, setOpen] = useState(false);

  const selectedIndex = useMemo(() => dropdownOptions.indexOf(selected), [selected]);

  return (
    <ScreenSurface>
      <View style={styles.header}>
        <Text style={[styles.title, { color: palette.text }]}>Dropdown</Text>
        <Text style={[styles.subtitle, { color: palette.muted }]}>Selector simple con estado local y opción activa.</Text>
      </View>

      <InfoCard title="Elegir tecnología" description="Mantén este patrón cuando no necesites un picker nativo.">
        <Pressable
          onPress={() => setOpen((value) => !value)}
          style={[styles.trigger, { backgroundColor: palette.background, borderColor: palette.border }]}>
          <Text style={[styles.triggerLabel, { color: palette.text }]}>{selected}</Text>
          <Text style={[styles.triggerIndex, { color: palette.muted }]}>Opción {selectedIndex + 1}</Text>
        </Pressable>

        {open ? (
          <View style={styles.menu}>
            {dropdownOptions.map((option) => (
              <Pressable
                key={option}
                onPress={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                style={[
                  styles.menuItem,
                  {
                    backgroundColor: option === selected ? palette.tintSoft : palette.surface,
                    borderColor: palette.border,
                  },
                ]}>
                <Text style={[styles.menuText, { color: palette.text }]}>{option}</Text>
              </Pressable>
            ))}
          </View>
        ) : null}
      </InfoCard>
    </ScreenSurface>
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
  trigger: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    gap: 4,
  },
  triggerLabel: {
    fontSize: 16,
    fontWeight: '800',
  },
  triggerIndex: {
    fontSize: 13,
  },
  menu: {
    gap: 10,
  },
  menuItem: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
  },
  menuText: {
    fontSize: 15,
    fontWeight: '700',
  },
});
