import { S } from "./styled";
import { Text, View } from "react-native";

const CategoryBox = ({
  color,
  name,
  fontSize,
}: {
  color: string;
  name: string;
  fontSize: string;
}) => {
  return (
    <View style={S.Wrapper}>
      <Text style={S.Text}>{name}</Text>
    </View>
  );
};

export default CategoryBox;
