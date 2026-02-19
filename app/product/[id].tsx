import { Image } from 'expo-image';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { findCatalogProductById } from '@/constants/catalog-data';
import { Fonts } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function ProductDetailScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const [note, setNote] = useState('');
  const [qty, setQty] = useState(1);

  const productId = useMemo(() => {
    if (Array.isArray(params.id)) {
      return params.id[0];
    }
    return params.id;
  }, [params.id]);

  const product = productId ? findCatalogProductById(productId) : undefined;

  const increaseQty = () => setQty((prev) => prev + 1);
  const decreaseQty = () => setQty((prev) => Math.max(1, prev - 1));

  if (!product) {
    return (
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundTitle}>Produk tidak ditemukan</Text>
          <TouchableOpacity style={styles.backFallbackButton} onPress={() => router.back()}>
            <Text style={styles.backFallbackText}>Kembali</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.86} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={16} color="#2f2f2f" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail Produk</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainer, { paddingBottom: insets.bottom + 190 }]}>
        <View style={styles.coverCard}>
          <Image source={product.image} contentFit="cover" style={styles.coverImage} />
        </View>

        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productStock}>{product.stock}</Text>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Deskripsi</Text>
          <Text style={styles.sectionDesc}>{product.description}</Text>
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Bahan</Text>
          {product.ingredients.map((ingredient) => (
            <Text key={ingredient} style={styles.bulletText}>
              - {ingredient}
            </Text>
          ))}
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Catatan Tambahan</Text>
          <TextInput
            value={note}
            onChangeText={setNote}
            multiline
            numberOfLines={3}
            placeholder="Tulisan, Greeting Card"
            placeholderTextColor="#b5b5b5"
            style={styles.noteInput}
          />
        </View>
      </ScrollView>

      <View style={[styles.bottomCard, { paddingBottom: Math.max(insets.bottom, 12) }]}>
        <View style={styles.bottomTopRow}>
          <Text style={styles.priceText}>{product.detailPrice}</Text>
          <View style={styles.qtyRow}>
            <TouchableOpacity
              activeOpacity={0.88}
              disabled={qty === 1}
              onPress={decreaseQty}
              style={[styles.qtyButton, qty === 1 && styles.qtyButtonDisabled]}>
              <Text style={styles.qtyButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{qty}</Text>
            <TouchableOpacity activeOpacity={0.88} onPress={increaseQty} style={styles.qtyButton}>
              <Text style={styles.qtyButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.cartButton}
          onPress={() => router.push('/order/konfirmasi')}>
          <Text style={styles.cartButtonText}>+ Tambah Keranjang</Text>
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
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
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
    color: '#313131',
    fontSize: 15,
    fontFamily: Fonts.semibold,
    marginLeft: -1,
    marginTop: -1,
  },
  headerTitle: {
    color: '#2e2e2e',
    fontSize: 15,
    fontFamily: Fonts.bold,
  },
  headerPlaceholder: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    paddingHorizontal: 14,
    paddingTop: 12,
  },
  coverCard: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    borderWidth: 1,
    borderColor: '#d4d4d4',
  },
  coverImage: {
    width: '100%',
    height: 228,
  },
  productName: {
    textAlign: 'center',
    marginTop: 12,
    color: '#2f2f2f',
    fontSize: 15,
    lineHeight: 20,
    fontFamily: Fonts.semibold,
  },
  productStock: {
    textAlign: 'center',
    marginTop: 2,
    color: '#a1a1a1',
    fontSize: 12,
    fontFamily: Fonts.regular,
  },
  sectionBlock: {
    marginTop: 12,
  },
  sectionTitle: {
    color: '#333333',
    fontSize: 18,
    lineHeight: 22,
    fontFamily: Fonts.bold,
    marginBottom: 4,
  },
  sectionDesc: {
    color: '#8d8d8d',
    fontSize: 12,
    lineHeight: 17,
    fontFamily: Fonts.regular,
  },
  bulletText: {
    color: '#9a9a9a',
    fontSize: 12,
    lineHeight: 16,
    fontFamily: Fonts.regular,
    marginBottom: 1,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 12,
    backgroundColor: '#fefefe',
    minHeight: 78,
    textAlignVertical: 'top',
    paddingHorizontal: 12,
    paddingTop: 11,
    color: '#2f2f2f',
    fontSize: 13,
    fontFamily: Fonts.regular,
  },
  bottomCard: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    backgroundColor: '#FEFEFE',
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: -2 },
    elevation: 5,
  },
  bottomTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  priceText: {
    color: '#0b4a87',
    fontSize: 28,
    fontFamily: Fonts.bold,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  qtyButton: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#9b9b9b',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  qtyButtonText: {
    color: '#3a3a3a',
    fontSize: 15,
    lineHeight: 15,
    fontFamily: Fonts.semibold,
    marginTop: -1,
  },
  qtyButtonDisabled: {
    opacity: 0.45,
  },
  qtyText: {
    color: '#2e2e2e',
    fontSize: 15,
    minWidth: 18,
    textAlign: 'center',
    fontFamily: Fonts.semibold,
  },
  cartButton: {
    height: 43,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0b4a87',
  },
  cartButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: Fonts.bold,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  notFoundTitle: {
    color: '#2f2f2f',
    fontSize: 18,
    fontFamily: Fonts.bold,
    marginBottom: 12,
  },
  backFallbackButton: {
    borderRadius: 10,
    backgroundColor: '#0b4a87',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backFallbackText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: Fonts.bold,
  },
});
