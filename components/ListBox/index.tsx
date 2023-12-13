import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CoverProps, MultiSelectProps } from "../../types/list";
import { DetailsScreenNavigationProp } from "../../types/props";
import { S } from "./styled";
import { Image } from "expo-image";
import CategoryBox from "../common/CategoryBox";
import { CategoryColorArr } from "../../util/CategoryArray";

const ListBox = ({
  cover,
  title,
  category,
}: {
  cover: CoverProps;
  title: string;
  category: MultiSelectProps[];
}) => {
  const navigation: DetailsScreenNavigationProp = useNavigation();

  return (
    <View style={S.Wrapper}>
      <Image
        source={cover?.external?.url ?? cover?.file?.url ?? ""}
        alt="포스터 이미지"
        style={S.image}
      />
      <View style={S.Decs}>
        <Text style={S.Title}>{title}</Text>
        <View style={S.Categorys}>
          {category.map((i) => (
            <CategoryBox
              key={i.id}
              color={CategoryColorArr[i.color] ?? i.color}
              name={i.name}
              fontSize={"0.8rem"}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ListBox;
