import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    Details: { itemId: number };
    Settings: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>
export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;
export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;