import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { FigmaIcon, type FigmaIconName } from '@/components/ui/figma-icon';
import { Fonts } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

const statusSteps = [
  { key: 'payment', label: 'Pembayaran', icon: 'stepPayment' as FigmaIconName },
  { key: 'process', label: 'Diproses', icon: 'stepProcess' as FigmaIconName },
  { key: 'delivery', label: 'Dikirim', icon: 'stepDelivery' as FigmaIconName },
  { key: 'done', label: 'Selesai', icon: 'stepDone' as FigmaIconName },
];

export default function DetailPesananScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()} activeOpacity={0.86}>
          <Ionicons name="chevron-back" size={16} color="#2f2f2f" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail Pesanan</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.stepperRow}>
        {statusSteps.map((step, index) => (
          <View key={step.key} style={styles.stepItem}>
            <View style={styles.stepIconCircle}>
              <FigmaIcon name={step.icon} size={28} />
            </View>
            <Text style={styles.stepLabel}>{step.label}</Text>
            {index < statusSteps.length - 1 ? <View style={styles.stepConnector} /> : null}
          </View>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainer, { paddingBottom: insets.bottom + 116 }]}>
        <View style={[styles.sectionCard, styles.doneCard]}>
          <View style={styles.doneBadge}>
            <FigmaIcon name="stepDone" size={24} />
          </View>
          <Text style={styles.doneTitle}>Pesanan Anda Selesai</Text>
          <Text style={styles.mutedText}>16 Februari 2026 12:15</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Dikirim ke</Text>
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
          <View style={styles.inputRow}>
            <View style={styles.inputLeft}>
              <FigmaIcon name="calendar" size={14} />
              <Text style={styles.inputText}>16 Februari 2026 | 12:00</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Pesanan</Text>
          <View style={styles.orderItemRow}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=300&q=80',
              }}
              contentFit="cover"
              style={styles.orderImage}
            />
            <View style={styles.orderContent}>
              <Text style={styles.orderName}>Brownies Burnt Cheesecake</Text>
              <Text style={styles.mutedText}>Catatan Tambahan: -</Text>
              <Text style={styles.mutedText}>1x</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 12) }]}>
        <TouchableOpacity activeOpacity={0.9} style={styles.primaryFooterButton} onPress={() => router.push('/')}>
          <Text style={styles.primaryFooterButtonText}>Pesan Lagi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EFEFEF',
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
  stepperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    backgroundColor: '#FEFEFE',
  },
  stepItem: {
    alignItems: 'center',
    position: 'relative',
    flex: 1,
  },
  stepIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepLabel: {
    marginTop: 4,
    color: '#0b4a87',
    fontSize: 10,
    fontFamily: Fonts.medium,
  },
  stepConnector: {
    position: 'absolute',
    top: 14,
    right: -16,
    width: 32,
    height: 2,
    backgroundColor: '#0b4a87',
  },
  contentContainer: {
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  sectionCard: {
    borderRadius: 11,
    backgroundColor: '#fefefe',
    padding: 12,
    marginBottom: 10,
  },
  doneCard: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  doneBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  doneTitle: {
    color: '#0b4a87',
    fontSize: 13,
    fontFamily: Fonts.bold,
    marginBottom: 2,
  },
  sectionTitle: {
    color: '#343434',
    fontSize: 13,
    fontFamily: Fonts.bold,
    marginBottom: 8,
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
  orderItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderImage: {
    width: 56,
    height: 56,
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
