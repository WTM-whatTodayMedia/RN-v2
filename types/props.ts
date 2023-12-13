import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Detail: {
    id: number;
  };
};

export type DetailsScreenNavigationProp = NavigationProp<RootStackParamList>;
