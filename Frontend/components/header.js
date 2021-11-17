import React from "react";
import { Image } from "react-native";
import { styles } from "../styles/componentsStyles/headerStyles";

const LogoTitle = () => {
  return (
    <Image
      style={styles.logoImage}
      source={{
        uri: "https://picsum.photos/200/300",
      }}
    />
  );
};

export default LogoTitle;
