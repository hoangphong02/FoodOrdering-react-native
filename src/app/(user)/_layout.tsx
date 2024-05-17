import { Link, Redirect, Tabs } from 'expo-router';
import { TabBarIcon } from '@components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '@/provider/AuthProvider';

//4;14;56
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {session} = useAuth()
  if(session){
      return <Redirect href={'/'}/>
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // headerShown: false,
      }}>
      <Tabs.Screen name='index' options={{href: null}}/>
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          headerRight: ()=>(
            <Link href= '/modal' asChild>
              <Pressable>
                {({pressed})=> (
                  <FontAwesome
                    name='info-circle'
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{marginRight: 15, opacity: pressed? 0.5 : 1}}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerShown: false,
        }}
        
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'menu' : 'menu-outline'} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
