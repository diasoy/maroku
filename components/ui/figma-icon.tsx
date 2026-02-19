import { Image } from 'expo-image';
import { StyleSheet, type ImageStyle, type StyleProp } from 'react-native';

const FIGMA_ICON_SOURCE = {
  chat: require('@/assets/icon/icon-chat.png'),
  notif: require('@/assets/icon/icon-notif.png'),
  homeFill: require('@/assets/icon/navbar_beranda_fill.png'),
  homeOutline: require('@/assets/icon/navbar_beranda_outline.png'),
  catalogFill: require('@/assets/icon/katalog_fill.png'),
  catalogOutline: require('@/assets/icon/katalog_outline.png'),
  cart: require('@/assets/icon/cart.png'),
  cake: require('@/assets/icon/cake.png'),
  bigOrderCake: require('@/assets/icon/kuebigorder.png'),
  kelas: require('@/assets/icon/navbar_kelas.png'),
  pesanan: require('@/assets/icon/navbar_pesanan.png'),
  akun: require('@/assets/icon/navbar_akun.png'),
  calendar: require('@/assets/icon/kalender.png'),
  pencil: require('@/assets/icon/pensil.png'),
  trash: require('@/assets/icon/sampah.png'),
  note: require('@/assets/icon/catatanalamat.png'),
  stepPayment: require('@/assets/icon/pesan.png'),
  stepProcess: require('@/assets/icon/proses.png'),
  stepDelivery: require('@/assets/icon/delivery.png'),
  stepDone: require('@/assets/icon/centang.png'),
  qris: require('@/assets/images/barcode.png'),
} as const;

export type FigmaIconName = keyof typeof FIGMA_ICON_SOURCE;

type FigmaIconProps = {
  name: FigmaIconName;
  size?: number;
  style?: StyleProp<ImageStyle>;
};

export function FigmaIcon({ name, size = 22, style }: FigmaIconProps) {
  return (
    <Image
      source={FIGMA_ICON_SOURCE[name]}
      contentFit="contain"
      style={[styles.icon, { width: size, height: size }, style]}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    overflow: 'visible',
  },
});
