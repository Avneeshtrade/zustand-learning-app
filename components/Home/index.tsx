import { HomeScreenNavigationProp } from '@/types';
import React from 'react';
import { View, Text } from 'react-native';

type Props = {
    navigation: HomeScreenNavigationProp;
};
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
export default HomeScreen

