import { ImageBackground } from "expo-image";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Theme } from "../types/theme";

export const ImgBkg: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const theme = useContext(ThemeContext) as Theme;

  const themeBackgrounds: { [x: string]: any } = {
    "Wild West": require("../assets/images/ghost-town.jpg"),
    Fantasy: require("../assets/images/fantasy-forest.jpg"),
    Cyberpunk: require("../assets/images/cyberpunk-city.jpg"),
  };
  const backgroundImage = themeBackgrounds[theme.name];

  return (
    <ImageBackground source={backgroundImage} contentFit="cover" style={{ justifyContent: "center", flex: 1 }}>
      {children}
    </ImageBackground>
  );
};
