import { Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Fonts } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

const qrCells = [
  '111111100100001111111',
  '100000101001001000001',
  '101110101110101011101',
  '101110100111001011101',
  '101110101011101011101',
  '100000100010101000001',
  '111111101010101111111',
  '000000001111100000000',
  '101101111000011011101',
  '001101001111001001001',
  '111000111010111000111',
  '010101001111010101010',
  '111010111000111010111',
  '001001000110001001001',
  '101111101001111101101',
  '000000001110000000000',
  '111111101001111111111',
  '100000100110100000001',
  '101110101101101011101',
  '101110100010101011101',
  '101110101111101011101',
  '100000101000101000001',
  '111111101101101111111',
];

export default function PembayaranScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()} activeOpacity={0.86}>
          <Ionicons name="chevron-back" size={16} color="#2f2f2f" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pembayaran QRIS</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalAmount}>Rp40.000</Text>
        <Text style={styles.timerText}>
          Selesaikan pembayaran dalam <Text style={styles.timerAccent}>14 menit : 59 detik</Text>
        </Text>

        <View style={styles.qrContainer}>
          <Image 
            source={require('@/assets/images/barcode.png')} 
            style={{ width: '100%', height: '100%' }}
            contentFit="cover"
          />
        </View>

        <Text style={styles.hintText}>Unduh atau screenshot gambar QRIS</Text>

        <TouchableOpacity activeOpacity={0.88} style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Unduh Gambar QRIS</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 12) }]}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.primaryFooterButton}
          onPress={() => router.push('/order/detail')}>
          <Text style={styles.primaryFooterButtonText}>Konfirmasi Pembayaran</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    backgroundColor: '#FEFEFE',
  },
  backButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#555555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#2f2f2f',
    fontSize: 15,
    fontFamily: Fonts.semibold,
    marginLeft: -1,
    marginTop: -1,
  },
  headerTitle: {
    color: '#2f2f2f',
    fontSize: 15,
    fontFamily: Fonts.bold,
  },
  headerSpacer: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 12,
  },
  totalLabel: {
    color: '#2f2f2f',
    fontSize: 20,
    lineHeight: 28,
    marginTop: 8,
    fontFamily: Fonts.bold,
  },
  totalAmount: {
    color: '#0b4a87',
    fontSize: 26,
    lineHeight: 36,
    marginBottom: 14,
    fontFamily: Fonts.bold,
    marginTop: 1,
  },
  timerText: {
    marginTop: 8,
    color: '#4b4b4b',
    fontSize: 11,
    fontFamily: Fonts.regular,
  },
  timerAccent: {
    color: '#0b4a87',
    fontFamily: Fonts.semibold,
  },
  qrContainer: {
    marginTop: 12,
    width: 256,
    height: 256,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  qrRow: {
    flexDirection: 'row',
  },
  qrCell: {
    width: 8.7,
    height: 8.7,
  },
  qrCellDark: {
    backgroundColor: '#111111',
  },
  qrCellLight: {
    backgroundColor: '#ffffff',
  },
  hintText: {
    marginTop: 10,
    color: '#4e4e4e',
    fontSize: 11,
    fontFamily: Fonts.regular,
  },
  downloadButton: {
    marginTop: 12,
    borderRadius: 7,
    backgroundColor: '#0b4a87',
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  downloadButtonText: {
    color: '#ffffff',
    fontSize: 11,
    fontFamily: Fonts.semibold,
  },
  footer: {
    paddingHorizontal: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc',
    backgroundColor: '#FEFEFE',
  },
  primaryFooterButton: {
    height: 48,
    borderRadius: 12,
    backgroundColor: '#0b4a87',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryFooterButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: Fonts.bold,
  },
});
