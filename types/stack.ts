import { createStackNavigator, StackNavigationProp  } from "@react-navigation/stack";
import { RootStackParamList } from '@/types';

const Stack = createStackNavigator<RootStackParamList>()

export type NavigationProp = StackNavigationProp<RootStackParamList>

export const Navigator = Stack.Navigator
export const Screen = Stack.Screen
export const Group = Stack.Group
export const config = Stack.config
