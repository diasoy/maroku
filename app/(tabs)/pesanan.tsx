import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FigmaIcon } from '@/components/ui/figma-icon';
import { Fonts } from '@/constants/theme';

export default function PesananScreen() {
  const router = useRouter();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.card}>
        <FigmaIcon name="pesanan" size={44} />
        <Text style={styles.title}>Flow Pemesanan</Text>
        <Text style={styles.subtitle}>Buka halaman dummy konfirmasi, pembayaran, dan detail pesanan.</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.primaryButton}
          onPress={() => router.push('/order/konfirmasi')}>
          <Text style={styles.primaryButtonText}>Buka Konfirmasi Pesanan</Text>
        </TouchableOpacity>
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
  primaryButton: {
    marginTop: 16,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: '#0b4a87',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: Fonts.semibold,
  },
});
