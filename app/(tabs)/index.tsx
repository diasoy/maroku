import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FigmaIcon, type FigmaIconName } from '@/components/ui/figma-icon';
import { Fonts } from '@/constants/theme';

type QuickAction = {
  id: string;
  title: string;
  description: string;
  icon: FigmaIconName;
};

type StockItem = {
  id: string;
  name: string;
  subtitle: string;
  stock: string;
  price: string;
   
  image: any;
};

const quickActions: QuickAction[] = [
  {
    id: 'order',
    title: 'Pesan',
    description: 'Pesan menu katalog dengan mudah',
    icon: 'cart',
  },
  {
    id: 'custom-cake',
    title: 'Custom Cake',
    description: 'Kue custom sesuai rasa dan desain pilihanmu',
    icon: 'cake',
  },
];

const stockItems: StockItem[] = [
  {
    id: 'brownies-burnt-cheesecake',
    name: 'Brownies Burnt Cheesecake',
    subtitle: 'Tanpa Gula | Tanpa Tepung',
    stock: 'Sisa 10 Slice',
    price: 'Rp25.000',
    image: require('@/assets/images/fotoproduk.png'),
  },
  {
    id: 'matcha-tiramisu',
    name: 'Matcha Burnt Cheesecake',
    subtitle: 'Tanpa Gula | Tanpa Tepung',
    stock: 'Sisa 10 Slice',
    price: 'Rp22.000',
    image: require('@/assets/images/matcha_tiramissu.png'),
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const heroAnim = useRef(new Animated.Value(0)).current;
  const quickAnim = useRef(new Animated.Value(0)).current;
  const bigOrderAnim = useRef(new Animated.Value(0)).current;
  const stockAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(120, [
      Animated.timing(heroAnim, {
        toValue: 1,
        duration: 320,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(quickAnim, {
        toValue: 1,
        duration: 320,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(bigOrderAnim, {
        toValue: 1,
        duration: 320,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(stockAnim, {
        toValue: 1,
        duration: 320,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [bigOrderAnim, heroAnim, quickAnim, stockAnim]);

  const reveal = (value: Animated.Value) => ({
    opacity: value,
    transform: [
      {
        translateY: value.interpolate({
          inputRange: [0, 1],
          outputRange: [18, 0],
        }),
      },
    ],
  });

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.helloText}>Hello, Feen!</Text>
          <View style={styles.headerButtons}>
            <TouchableOpacity activeOpacity={0.86} style={styles.circleButton}>
              <FigmaIcon name="chat" size={32} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.86} style={styles.circleButton}>
              <FigmaIcon name="notif" size={32} />
            </TouchableOpacity>
          </View>
        </View>

        <Animated.View style={[styles.heroCard, reveal(heroAnim)]}>
          <Image
            source={require('@/assets/images/banner.png')}
            contentFit="cover"
            style={styles.heroImage}
          />
          <View style={styles.heroShade} />
          <View style={styles.heroTextBlock}>
            <Text style={styles.heroTitle}>Mother&apos;s Day</Text>
            <Text style={styles.heroSubtitle}>Ungkapkan cinta untuk Ibu dengan kue <br />manis dari Maroku</Text>
          </View>
        </Animated.View>

        <Animated.View style={reveal(quickAnim)}>
          <Text style={styles.sectionTitle}>Buat Pesanan</Text>
          <View style={styles.quickActionRow}>
            {quickActions.map((item) => (
              <TouchableOpacity key={item.id} activeOpacity={0.88} style={styles.quickCard}>
                <Text style={styles.quickTitle}>{item.title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', gap:8 }}>
                  <Text style={styles.quickSubtitle}>{item.description}</Text>
                  <FigmaIcon name={item.icon} size={32} style={styles.quickIcon} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        <Animated.View style={[styles.bigOrderCard, reveal(bigOrderAnim)]}>
          <View style={styles.bigOrderContent}>
            <Text style={styles.bigOrderTitle}>Big Order</Text>
            <Text style={styles.bigOrderText}>
              Pesanan kue jumlah besar untuk setiap momen spesial. Dapatkan penawaran menarik sekarang.
            </Text>
            <TouchableOpacity activeOpacity={0.9} style={styles.bigOrderButton}>
              <Text style={styles.bigOrderButtonText}>Lihat Detail</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('@/assets/icon/kuebigorder.png')}
            contentFit="contain"
            style={styles.bigOrderImage}
          />
        </Animated.View>

        <Animated.View style={reveal(stockAnim)}>
          <Text style={styles.sectionTitle}>Ready Stok Hari Ini!</Text>
          {stockItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.86}
              onPress={() => router.push({ pathname: '/product/[id]', params: { id: item.id } })}
              style={styles.stockCard}>
              <Image source={item.image} contentFit="cover" style={styles.stockImage} />
              <View style={styles.stockInfo}>
                <Text style={styles.stockName}>{item.name}</Text>
                <Text style={styles.stockMeta}>{item.subtitle}</Text>
                <Text style={styles.stockMeta}>{item.stock}</Text>
                <Text style={styles.stockPrice}>{item.price}</Text>
              </View>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </View>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  headerRow: {
    marginTop: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  helloText: {
    fontSize: 20,
    color: '#1f2b3a',
    fontFamily: Fonts.bold,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  circleButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#dce8f3',
  },
  heroImage: {
    width: '100%',
    height: 256,
  },
  heroShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(8, 37, 74, 0.33)',
  },
  heroTextBlock: {
    position: 'absolute',
    left: 20,
    right: 14,
    bottom: 16,
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 21,
    fontFamily: Fonts.bold,
    marginBottom: 4,
  },
  heroSubtitle: {
    color: '#f3f7ff',
    fontSize: 12,
    marginTop: 2,
    fontFamily: Fonts.medium,
  },
  sectionTitle: {
    color: '#1f2b3a',
    fontSize: 17,
    marginBottom: 10,
    fontFamily: Fonts.bold,
  },
  quickActionRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },
  quickCard: {
    flex: 1,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#0b4a87',
    backgroundColor: '#eff4f9',
    paddingHorizontal: 20,
    paddingVertical: 14,
    justifyContent: 'space-between',
  },
  quickTitle: {
    color: '#0b4a87',
    fontSize: 15,
    fontFamily: Fonts.bold,
  },
  quickSubtitle: {
    color: '#314e70',
    fontSize: 10,
    lineHeight: 13,
    fontFamily: Fonts.medium,
    paddingRight: 20,
  },
  quickIcon: {
    alignSelf: 'flex-end',
    marginBottom: 1,
  },
  bigOrderCard: {
    borderRadius: 13,
    backgroundColor: '#0b4a87',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 14,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bigOrderContent: {
    flex: 1,
  },
  bigOrderTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: Fonts.bold,
  },
  bigOrderText: {
    marginTop: 4,
    color: '#e6f0fb',
    fontSize: 11,
    lineHeight: 16,
    fontFamily: Fonts.regular,
  },
  bigOrderButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  bigOrderButtonText: {
    color: '#0b4a87',
    fontSize: 11,
    fontFamily: Fonts.semibold,
  },
  bigOrderImage: {
    width: 144,
    height: 144,
  },
  stockCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: '#ffffff',
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#d9e5f1',
  },
  stockImage: {
    width: 84,
    height: 84,
    borderRadius: 9,
  },
  stockInfo: {
    flex: 1,
    marginLeft: 10,
  },
  stockName: {
    color: '#253346',
    fontSize: 14,
    marginBottom: 1,
    fontFamily: Fonts.semibold,
  },
  stockMeta: {
    color: '#6e7f92',
    fontSize: 11,
    fontFamily: Fonts.regular,
    marginTop: 2,
  },
  stockPrice: {
    color: '#0b4a87',
    fontSize: 14,
    fontFamily: Fonts.bold,
    marginTop: 4,
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#0b4a87',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 18,
    fontFamily: Fonts.bold,
    marginTop: -1,
  },
});
