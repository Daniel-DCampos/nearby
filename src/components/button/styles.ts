import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";
import { coolDownAsync } from "expo-web-browser";

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.green.base,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 14,
    height: 56,
    maxHeight: 56
  },
  title: {
    color: colors.gray[100],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
  },
});
