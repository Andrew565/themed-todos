import { ImageBackground } from "expo-image";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Theme } from "../types/theme";

export const ImgBkg: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const theme = useContext(ThemeContext) as Theme;

  let backgroundImage;
  if (theme.name === "Wild West") {
    backgroundImage = require("../assets/images/ghost-town.jpg");
  } else if (theme.name === "Fantasy") {
    backgroundImage = require("../assets/images/fantasy-forest.jpg");
  } else if (theme.name === "Cyberpunk") {
    backgroundImage = require("../assets/images/cyberpunk-city.jpg");
  }

  return (
    <ImageBackground source={backgroundImage} contentFit="cover" style={{ justifyContent: "center", flex: 1 }}>
      {children}
    </ImageBackground>
  );
};
