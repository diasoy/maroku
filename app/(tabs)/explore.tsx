import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
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

import { catalogCategories, catalogSections } from '@/constants/catalog-data';
import { Fonts } from '@/constants/theme';

export default function CatalogScreen() {
  const router = useRouter();
  const headAnim = useRef(new Animated.Value(0)).current;
  const tabsAnim = useRef(new Animated.Value(0)).current;
  const listAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(110, [
      Animated.timing(headAnim, {
        toValue: 1,
        duration: 320,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(tabsAnim, {
        toValue: 1,
        duration: 320,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(listAnim, {
        toValue: 1,
        duration: 320,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [headAnim, listAnim, tabsAnim]);

  const reveal = (value: Animated.Value) => ({
    opacity: value,
    transform: [
      {
        translateY: value.interpolate({
          inputRange: [0, 1],
          outputRange: [16, 0],
        }),
      },
    ],
  });

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
        <Animated.View style={reveal(headAnim)}>
          <Text style={styles.pageTitle}>Katalog</Text>
          <View style={styles.filterRow}>
            <TouchableOpacity activeOpacity={0.88} style={styles.dateChip}>
              <MaterialCommunityIcons name="calendar-month" size={18} color="#24364f" />
              <Text style={styles.dateText}>16 Februari 2026 | 12:00</Text>
              <Ionicons name="chevron-down" size={16} color="#24364f" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.88} style={styles.sortButton}>
              <Ionicons name="options-outline" size={18} color="#24364f" />
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Animated.View style={reveal(tabsAnim)}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryContainer}>
            {catalogCategories.map((category, index) => {
              const active = index === 0;
              return (
                <TouchableOpacity key={category} activeOpacity={0.9} style={styles.categoryButton}>
                  <Text style={[styles.categoryText, active && styles.categoryTextActive]}>{category}</Text>
                  {active ? <View style={styles.categoryLine} /> : null}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Animated.View>

        <Animated.View style={reveal(listAnim)}>
          {catalogSections.map((section) => (
            <View key={section.id} style={styles.sectionBlock}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <View style={styles.productGroup}>
                {section.items.map((item, itemIndex) => {
                  const isLastItem = itemIndex === section.items.length - 1;
                  return (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.86}
                      onPress={() => router.push({ pathname: '/product/[id]', params: { id: item.id } })}
                      style={[styles.productRow, isLastItem && styles.productRowLast]}>
                    <Image source={item.image} contentFit="cover" style={styles.productImage} />
                    <View style={styles.productInfo}>
                      <Text style={styles.productName}>{item.name}</Text>
                      <Text style={styles.productStock}>{item.stock}</Text>
                      <Text style={styles.productPrice}>{item.price}</Text>
                    </View>
                    <View style={styles.addButton}>
                      <Text style={styles.addButtonText}>+</Text>
                    </View>
                  </TouchableOpacity>
                  );
                })}
              </View>
            </View>
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
  pageTitle: {
    marginTop: 8,
    color: '#1f2b3a',
    fontSize: 24,
    fontFamily: Fonts.bold,
  },
  filterRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateChip: {
    flex: 1,
    height: 42,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d5e2f1',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateText: {
    flex: 1,
    color: '#24364f',
    fontSize: 11,
    fontFamily: Fonts.medium,
  },
  sortButton: {
    width: 42,
    height: 42,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d5e2f1',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevronText: {
    color: '#24364f',
    fontSize: 12,
    fontFamily: Fonts.semibold,
    marginTop: -1,
  },
  categoryContainer: {
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dbe5f2',
    paddingBottom: 8,
  },
  categoryButton: {
    marginRight: 18,
  },
  categoryText: {
    color: '#a4adba',
    fontSize: 13,
    fontFamily: Fonts.semibold,
  },
  categoryTextActive: {
    color: '#0b4a87',
  },
  categoryLine: {
    marginTop: 7,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#0b4a87',
  },
  sectionBlock: {
    marginTop: 16,
  },
  sectionTitle: {
    color: '#1f2b3a',
    fontSize: 18,
    marginBottom: 8,
    fontFamily: Fonts.bold,
  },
  productGroup: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d8e3ef',
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5ebf2',
  },
  productRowLast: {
    borderBottomWidth: 0,
  },
  productImage: {
    width: 68,
    height: 68,
    borderRadius: 10,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    color: '#2a3547',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: Fonts.semibold,
  },
  productStock: {
    marginTop: 2,
    color: '#8a98a8',
    fontSize: 11,
    fontFamily: Fonts.regular,
  },
  productPrice: {
    marginTop: 3,
    color: '#0b4a87',
    fontSize: 14,
    fontFamily: Fonts.bold,
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
