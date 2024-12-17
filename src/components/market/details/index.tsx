import { IconPhone, IconMapPin, IconTicket } from "@tabler/icons-react-native";
import { View, Text } from "react-native";
import { s } from "./styles";
import { Button } from "@/components/button";

export type PropsDetails = {
  name: string;
  description: string;
  address: string;
  phone: string;
  cupons: string;
  rules: {
    id: string;
    description: string;
  }[];
};

type Props = {
  data: PropsDetails;
};
export function Details({ data }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.name}>{data.name}</Text>
      <Text style={s.description}>{data.description}</Text>

      <View style={s.group}>
        <Text style={s.title}>Informações</Text>
      </View>
    </View>
  );
}
