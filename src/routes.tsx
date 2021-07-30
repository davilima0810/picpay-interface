import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign , Ionicons } from '@expo/vector-icons';

import PayBottom from './components/PayBottom';

import HomeScreen from './Pages/Home';
import WalletScreen from './Pages/Wallet';
import PayScreen from './Pages/Pay';

const Bottomtabs = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home'
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard'
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline'
  },
  Settings: {
    lib: AntDesign,
    name: 'setting'
  }
}
const Routes: React.FC = () =>{
  return (
    <>
      <Bottomtabs.Navigator 
        screenOptions={({route, navigation}) => ({
          tabBarIcon: ({ color, size, focused }) =>{
            if(route.name == 'Pay'){
              return (
                <PayBottom  
                  onPress={() => navigation.navigate('Pay')}
                  focused={focused}
                />
              );
            }

            const { lib: Icon, name } = icons[route.name];
            return <Icon name={name} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#131418',
            borderTopColor: 'rgba(255,255,255, 0.2)',
          }, 
          activeTintColor: '#FFF',
          inactiveTintColor: '#92929c',
        }}
      >
        <Bottomtabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Inicio'
          }}
        />
        <Bottomtabs.Screen
          name="Wallet"
          component={WalletScreen}
          options={{
            title: 'Carteira'
          }}  
        />
        <Bottomtabs.Screen
          name="Pay"
          component={PayScreen}
          options={{
            title: ''
          }}
        />
        <Bottomtabs.Screen
          name="Notifications"
          component={PayScreen}
          options={{
            title: 'Notificações'
          }}
        />
        <Bottomtabs.Screen
          name="Settings"
          component={PayScreen}
          options={{
            title: 'Ajustes'
          }}
        />
      </Bottomtabs.Navigator>
    </>
  );
};

export default Routes;