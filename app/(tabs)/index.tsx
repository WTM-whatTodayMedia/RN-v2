import { Platform, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Text, View } from "../../components/Themed";
import { useEffect, useState } from "react";
import { listProps } from "../../types/list";
import { fetchList, getFilterList } from "../../api/api";
import { legnthRn } from "../../util/lengthRn";
import Header from "../../components/common/Header/Header";
import { Image } from "expo-image";
import ListBox from "../../components/ListBox";

export default function TabOneScreen() {
  // const [Initdata, setInitData] = useState<listProps[]>([]);
  // const [list, setList] = useState<listProps[]>([]);
  // const [recommendImg, setRecommendImg] = useState<{
  //   imgUrl?: string;
  //   imgTitle?: string;
  // }>({});

  // const onHandleCategoryClick = async (category: string) => {
  //   if (category === "영화" || category === "드라마") {
  //     const filterList: listProps[] = await getFilterList(category);
  //     setList(filterList);
  //   } else setList(Initdata);
  // };

  // useEffect(() => {
  //   async function initDataFun() {
  //     const data: listProps[] = await fetchList();
  //     setInitData(data);
  //     setList(data);
  //     const RN = legnthRn(data);
  //     setRecommendImg({
  //       imgUrl:
  //         data[RN]?.cover?.external?.url ?? data[RN]?.cover?.file?.url ?? "",
  //       imgTitle: data[RN]?.properties.Name.title[0].text.content,
  //     });
  //   }
  //   initDataFun();
  // }, []);

  return (
    <View style={S.Wrapper}>
      {/* <Header onCategoryClick={onHandleCategoryClick} />
      <ScrollView style={S.List} horizontal={false}>
        <Image
          source={recommendImg.imgUrl ?? ""}
          alt="포스터 이미지"
          style={S.image}
        />
        <View style={S.StylegridView}>
          {list && list.length > 0 ? (
            list.map((i, index) => (
              <ListBox
                key={index}
                cover={i.cover}
                title={i.properties.Name.title[0]?.text.content}
                category={i.properties.Category.multi_select}
              />
            ))
          ) : (
            <Text>로딩중...</Text>
          )}
        </View>
      </ScrollView> */}
    </View>
  );
}

const S = StyleSheet.create({
  Wrapper: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    marginTop: Platform.OS === "ios" ? Constants.statusBarHeight : 0,
  },
  List: {
    flex: 1,
    width: "100%",
  },
  StylegridView: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    paddingBottom: 80,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
