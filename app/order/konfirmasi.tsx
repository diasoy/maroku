import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { FigmaIcon } from '@/components/ui/figma-icon';
import { Fonts } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function KonfirmasiPesananScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()} activeOpacity={0.86}>
          <Ionicons name="chevron-back" size={16} color="#2f2f2f" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Konfirmasi Pesanan</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.switchWrapper}>
        <View style={styles.deliverySwitch}>
          <TouchableOpacity activeOpacity={0.86} style={styles.switchOption}>
            <Text style={styles.switchText}>Ambil di Toko</Text>
            <FigmaIcon name="cart" size={20} style={styles.pickupIcon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={[styles.switchOption, styles.switchOptionActive]}>
            <Text style={[styles.switchText, styles.switchTextActive]}>Dikirim</Text>
            <FigmaIcon name="stepDelivery" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainer, { paddingBottom: insets.bottom + 116 }]}>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Alamat Pengiriman</Text>
            <TouchableOpacity activeOpacity={0.9} style={styles.smallActionButton}>
              <Text style={styles.smallActionButtonText}>Ubah Alamat</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.boldText}>Rumah</Text>
          <Text style={styles.mutedText}>Feen - 081234567890</Text>
          <Text style={styles.mutedText}>Jl. Gatot Subroto No.7, Randusari, Kec. Gadingrejo, Kota Pasuruan, Jawa Timur.</Text>
          <View style={styles.noteBox}>
            <Text style={styles.noteLabel}>Catatan</Text>
            <View style={styles.noteRow}>
              <FigmaIcon name="note" size={12} />
              <Text style={styles.mutedText}>-</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Waktu Pengiriman</Text>
          <TouchableOpacity activeOpacity={0.9} style={styles.inputRow}>
            <View style={styles.inputLeft}>
              <FigmaIcon name="calendar" size={14} />
              <Text style={styles.inputText}>16 Februari 2026 | 12:00</Text>
            </View>
            <FigmaIcon name="pencil" size={13} />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Pesanan</Text>
            <TouchableOpacity activeOpacity={0.9} style={styles.smallActionButton}>
              <Text style={styles.smallActionButtonText}>Tambah Pesanan</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.orderItemRow}>
            <Image
              source={require('@/assets/images/fotoproduk.png')}
              contentFit="cover"
              style={styles.orderImage}
            />
            <View style={styles.orderContent}>
              <Text style={styles.orderName}>Brownies Burnt Cheesecake</Text>
              <Text style={styles.mutedText}>Catatan Tambahan: -</Text>
              <View style={styles.orderActionRow}>
                <View style={styles.iconActionGroup}>
                  <TouchableOpacity activeOpacity={0.88} style={styles.iconActionButton}>
                    <FigmaIcon name="pencil" size={16} style={styles.iconTint} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.88} style={styles.iconActionButton}>
                    <FigmaIcon name="trash" size={16} style={styles.iconTint} />
                  </TouchableOpacity>
                </View>
                <View style={styles.qtyControl}>
                  <TouchableOpacity activeOpacity={0.88} style={styles.qtyButton}>
                    <Text style={styles.qtyButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyValue}>1</Text>
                  <TouchableOpacity activeOpacity={0.88} style={[styles.qtyButton, styles.qtyButtonAdd]}>
                    <Text style={[styles.qtyButtonText, styles.qtyButtonAddText]}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
          <TouchableOpacity activeOpacity={0.9} style={styles.inputRow}>
            <View style={styles.inputLeft}>
              <Image
          source={require('@/assets/icon/qris.png')}
          style={styles.paymentIcon}
              />
              <Text style={styles.inputText}>QRIS</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#2f2f2f" />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Rincian Pembayaran</Text>
          <View style={styles.rincianRow}>
            <Text style={styles.rincianLabel}>Harga</Text>
            <Text style={styles.rincianValue}>Rp25.000</Text>
          </View>
          <View style={styles.rincianRow}>
            <Text style={styles.rincianLabel}>Ongkos kirim</Text>
            <Text style={styles.rincianValue}>Rp15.000</Text>
          </View>
          <View style={styles.rincianDivider} />
          <View style={styles.rincianRow}>
            <Text style={styles.rincianTotal}>Total Pembayaran</Text>
            <Text style={styles.rincianTotalValue}>Rp40.000</Text>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 12) }]}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.primaryFooterButton}
          onPress={() => router.push('/order/pembayaran')}>
          <Text style={styles.primaryFooterButtonText}>Bayar - Rp40.000</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
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
  contentContainer: {
    paddingHorizontal: 12,
    paddingTop: 9,
  },
  switchWrapper: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  deliverySwitch: {
    borderWidth: 1,
    borderColor: '#d8d8d8',
    borderRadius: 10,
    padding: 4,
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
  },
  switchOption: {
    flex: 1,
    height: 40,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  switchOptionActive: {
    backgroundColor: '#0b4a87',
  },
  switchText: {
    color: '#525252',
    fontSize: 11,
    fontFamily: Fonts.medium,
  },
  pickupIcon: {
    tintColor: '#6f6f6f',
  },
  switchTextActive: {
    color: '#ffffff',
  },
  sectionCard: {
    borderRadius: 11,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    padding: 12,
    marginTop: 10,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    gap: 8,
  },
  sectionTitle: {
    color: '#343434',
    fontSize: 13,
    fontFamily: Fonts.bold,
  },
  smallActionButton: {
    borderRadius: 6,
    backgroundColor: '#0b4a87',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  smallActionButtonText: {
    color: '#ffffff',
    fontSize: 10,
    fontFamily: Fonts.semibold,
  },
  boldText: {
    color: '#363636',
    fontSize: 12,
    fontFamily: Fonts.semibold,
    marginBottom: 2,
  },
  mutedText: {
    color: '#7a7a7a',
    fontSize: 11,
    lineHeight: 14,
    fontFamily: Fonts.regular,
  },
  noteBox: {
    marginTop: 8,
    borderRadius: 9,
    backgroundColor: '#dedede',
    padding: 8,
  },
  noteLabel: {
    color: '#868686',
    fontSize: 11,
    marginBottom: 4,
    fontFamily: Fonts.regular,
  },
  noteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  inputRow: {
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    height: 42,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputText: {
    color: '#2f2f2f',
    fontSize: 12,
    fontFamily: Fonts.regular,
  },
  paymentIcon: {
    width: 24,
    height: 8,
    
  },
  orderItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  orderImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#d9d9d9',
  },
  orderContent: {
    marginLeft: 10,
    flex: 1,
  },
  orderName: {
    color: '#2f2f2f',
    fontSize: 13,
    fontFamily: Fonts.semibold,
    marginBottom: 2,
  },
  orderActionRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'flex-end',
  },
  iconActionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  iconActionButton: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTint: {
    tintColor: '#5a5a5a',
  },
  qtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  qtyButton: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#b8b8b8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyButtonAdd: {
    backgroundColor: '#0b4a87',
    borderColor: '#0b4a87',
  },
  qtyButtonText: {
    color: '#6f6f6f',
    fontSize: 15,
    lineHeight: 15,
    fontFamily: Fonts.semibold,
    marginTop: -1,
  },
  qtyButtonAddText: {
    color: '#ffffff',
  },
  qtyValue: {
    color: '#2f2f2f',
    fontSize: 13,
    minWidth: 10,
    textAlign: 'center',
    fontFamily: Fonts.semibold,
  },
  chevronText: {
    color: '#3b3b3b',
    fontSize: 13,
    fontFamily: Fonts.semibold,
    marginTop: -1,
  },
  rincianRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  rincianLabel: {
    color: '#6a6a6a',
    fontSize: 12,
    fontFamily: Fonts.regular,
  },
  rincianValue: {
    color: '#2f2f2f',
    fontSize: 12,
    fontFamily: Fonts.regular,
  },
  rincianDivider: {
    height: 1,
    backgroundColor: '#e8e8e8',
    marginVertical: 6,
  },
  rincianTotal: {
    color: '#1a1a1a',
    fontSize: 13,
    fontFamily: Fonts.bold,
  },
  rincianTotalValue: {
    color: '#0b4a87',
    fontSize: 13,
    fontFamily: Fonts.bold,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
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
