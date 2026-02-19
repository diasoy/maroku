import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FigmaIcon } from '@/components/ui/figma-icon';
import { Fonts } from '@/constants/theme';

export default function AkunScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.card}>
        <FigmaIcon name="akun" size={44} />
        <Text style={styles.title}>Akun</Text>
        <Text style={styles.subtitle}>Profil, alamat, dan preferensi tersedia di halaman ini.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#d8e3ef',
    backgroundColor: '#ffffff',
    paddingVertical: 26,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    color: '#1f2b3a',
    fontSize: 28,
    fontFamily: Fonts.bold,
  },
  subtitle: {
    marginTop: 4,
    color: '#708196',
    fontSize: 14,
    fontFamily: Fonts.regular,
    textAlign: 'center',
  },
});
