import axios from "axios";
import {NetworkInfo} from 'react-native-network-info';

var ip = "";

NetworkInfo.getIPV4Address().then(ipv4Address => {
    console.log(ipv4Address);
    ip = ipv4Address ||  "192.168.0.186";
  });

export const api = axios.create({
    baseURL: `http://${ip}:3333`,
    timeout: 700
})