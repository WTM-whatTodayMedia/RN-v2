import { StyleSheet } from "react-native";
import { theme } from "../../../util/color";

export const S = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#151515",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontSize: 30,
    color: theme.mainColor,
    fontWeight: "bold",
  },
  Radio: {
    backgroundColor: "white",
    width: 200,
    paddingVertical: 16,
  },
});
