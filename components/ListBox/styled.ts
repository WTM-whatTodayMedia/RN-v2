import { StyleSheet } from "react-native";

export const S = StyleSheet.create({
  Wrapper: {
    width: "48%",
    height: 360,
    flexDirection: "column",
    cursor: "pointer",
    marginVertical: 15,
    transition: "all 0.15s ease-in-out",
    borderRadius: 7,
  },
  image: {
    width: "100%",
    height: 280,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  Decs: {
    width: "100%",
    height: 100,
    flex: 1,
    gap: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingHorizontal: "4%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.055)",
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  Categorys: {
    width: "100%",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
