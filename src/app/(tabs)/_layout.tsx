import Ionicons from '@react-native-vector-icons/ionicons/static';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '@/constants/Colors';
import { useAuthStore } from '@/store/useAuthStore';

export default function TabLayout() {
    const insets = useSafeAreaInsets();
    const user = useAuthStore((state) => state.user);

    return (
        <Tabs
            initialRouteName="home"
            screenOptions={{
                // tabBarShowLabel: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.inactiveTab,
                tabBarStyle: {
                    // backgroundColor: '#1E1E1E',
                    borderTopColor: '#2C2C2C',
                    borderTopWidth: 1,
                    height: Platform.OS === 'android' ? 60 + insets.bottom : 85 + insets.bottom,
                    paddingTop: 8,
                    paddingBottom: Platform.OS === 'android' ? 8 : 28,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    marginTop: -2,
                    marginBottom: 4,
                },
                headerStyle: {
                    backgroundColor: Colors.background,
                    shadowColor: 'transparent',
                    elevation: 0,
                    borderBottomWidth: 0,
                },
                headerTitleStyle: {
                    color: Colors.headingText,
                    fontWeight: 'bold',
                    fontSize: 24,
                },
                headerTitleAlign: 'left',
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                    // headerRight: () => <HeaderRightProfileIcon />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'search' : 'search-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                    // headerRight: () => <HeaderRightProfileIcon />,
                }}
            />
            {/* <Tabs.Screen
                name="series"
                options={{
                    title: 'TV Series',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'tv' : 'tv-outline'} size={size} color={color} />
                    ),
                    // headerRight: () => <HeaderRightProfileIcon />,
                }}
            /> */}
            <Tabs.Screen
                name="collection"
                options={{
                    href: user ? `/collection` : null,
                    title: 'Collection',
                    headerShown: false,
                    headerTitle: 'My Collection',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'albums' : 'albums-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                    // headerRight: () => <HeaderRightProfileIcon />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    href: null,
                }}
            />
        </Tabs>
    );
}

// Native Tabs
// import { NativeTabs } from 'expo-router/unstable-native-tabs';
// import { Colors } from '@/constants/Colors';
// import { useAuthStore } from '@/store/useAuthStore';

// export default function TabLayout() {
//     const user = useAuthStore((state) => state.user);

//     return (
//         <NativeTabs
//             rippleColor={'transparent'}
//             // rippleColor={'rgba(255, 255, 255, 0.1)'}
//             shadowColor={Colors.tabIndicator}
//             indicatorColor={Colors.tabIndicator}
//             backgroundColor={Colors.tabBackground}
//             iconColor={{
//                 default: Colors.inactiveTab,
//                 selected: Colors.primary,
//             }}
//             labelStyle={{
//                 default: { fontSize: 10, fontWeight: '500' },
//                 selected: { fontSize: 10, fontWeight: '700' },
//             }}>
//             <NativeTabs.Trigger name="home">
//                 <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
//                 <NativeTabs.Trigger.Icon
//                     sf={{
//                         default: 'house',
//                         selected: 'house.fill',
//                     }}
//                     md="home"
//                 />
//             </NativeTabs.Trigger>

//             <NativeTabs.Trigger name="search">
//                 <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
//                 <NativeTabs.Trigger.Icon sf="magnifyingglass" md="search" />
//             </NativeTabs.Trigger>

//             {user && (
//                 <NativeTabs.Trigger name="collection">
//                     <NativeTabs.Trigger.Label>Collection</NativeTabs.Trigger.Label>
//                     <NativeTabs.Trigger.Icon
//                         sf={{
//                             default: 'square.stack',
//                             selected: 'square.stack.fill',
//                         }}
//                         md="collections_bookmark"
//                     />
//                 </NativeTabs.Trigger>
//             )}

//             <NativeTabs.Trigger name="profile">
//                 <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
//                 <NativeTabs.Trigger.Icon
//                     sf={{
//                         default: 'person',
//                         selected: 'person.fill',
//                     }}
//                     md="person"
//                 />
//             </NativeTabs.Trigger>
//         </NativeTabs>
//     );
// }
