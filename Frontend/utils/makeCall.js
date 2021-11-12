import { Linking, Platform } from "react-native";

export const makeCall = (phone) => {
  let phoneNumber = phone;
  if (Platform.OS !== "android") {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  return Linking.openURL(phoneNumber);
};
