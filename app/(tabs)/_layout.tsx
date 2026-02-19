import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { FigmaIcon } from '@/components/ui/figma-icon';
import { Fonts } from '@/constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0b4a87',
        tabBarInactiveTintColor: '#8aa2bc',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 72,
          paddingTop: 8,
          paddingBottom: 10,
          borderTopWidth: 1,
          borderTopColor: '#d8e3ef',
          backgroundColor: '#FEFEFE',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: Fonts.semibold,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ focused }) => (
            <FigmaIcon name={focused ? 'homeFill' : 'homeOutline'} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Katalog',
          tabBarIcon: ({ focused }) => (
            <FigmaIcon name={focused ? 'catalogFill' : 'catalogOutline'} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="kelas"
        options={{
          title: 'Kelas',
          tabBarIcon: ({ focused }) => (
            <FigmaIcon name="kelas" size={22} style={{ opacity: focused ? 1 : 0.72 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="pesanan"
        options={{
          title: 'Pesanan',
          tabBarIcon: ({ focused }) => (
            <FigmaIcon name="pesanan" size={22} style={{ opacity: focused ? 1 : 0.72 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="akun"
        options={{
          title: 'Akun',
          tabBarIcon: ({ focused }) => (
            <FigmaIcon name="akun" size={22} style={{ opacity: focused ? 1 : 0.72 }} />
          ),
        }}
      />
    </Tabs>
  );
}
