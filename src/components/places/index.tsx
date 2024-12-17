import { Text, useWindowDimensions } from "react-native";
import { Place, PlaceProps } from "../place";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { s } from "./styles";
import { router } from "expo-router";

type Props = {
  data: PlaceProps[];
};
export function Places({ data }: Props) {
  const dimentions = useWindowDimensions();
  const bottonSheetRef = useRef<BottomSheet>(null);
  const snapPoints = {
    min: 278,
    max: dimentions.height - 128,
  };

  return (
    <BottomSheet
      ref={bottonSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Place
            data={item}
            onPress={() => router.navigate(`/market/${item.id}`)}
          />
        )}
        contentContainerStyle={s.content}
        ListHeaderComponent={() => (
          <Text style={s.title}>Explore lugares perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
