import { DetailsScreenNavigationProp, DetailsScreenRouteProp } from "@/types";
import React from "react";
import { Button, Text, View } from "react-native";

type NewType = {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
};

type Props = NewType;
const DetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  const { itemId } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details Page : Item ID: {itemId}</Text>
    </View>
  );
};
export default DetailsScreen;
