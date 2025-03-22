import "styled-components";

export interface Theme {
  name: string;
  background: string;
  backgroundImage: string;
  cardBackground: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  buttonBackground: string;
  buttonText: string;
  inputBackground: string;
  inputText: string;
  checkboxBorder: string;
  checkboxFill: string;
  font: string;
}

// Add theme type definition for styled-components
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export const WildWestTheme: Theme = {
  name: "Wild West",
  background: "#f4d03f",
  backgroundImage: "../assets/images/ghost-town.jpg",
  cardBackground: "#8b4513",
  textPrimary: "#f8f1e3",
  textSecondary: "#5d4037",
  accent: "#d35400",
  buttonBackground: "#c0392b",
  buttonText: "#f8f1e3",
  inputBackground: "#f8f1e3",
  inputText: "#2c1810",
  checkboxBorder: "#f8f1e3",
  checkboxFill: "#d35400",
  font: "Nashville",
};

export const FantasyTheme: Theme = {
  name: "Fantasy",
  background: "#2c3e50",
  backgroundImage: "../assets/images/fantasy-forest.jpg",
  cardBackground: "#34495e",
  textPrimary: "#ecf0f1",
  textSecondary: "#bdc3c7",
  accent: "#8e44ad",
  buttonBackground: "#2980b9",
  buttonText: "#ffffff",
  inputBackground: "#ecf0f1",
  inputText: "#2c3e50",
  checkboxBorder: "#8e44ad",
  checkboxFill: "#8e44ad",
  font: "Faerie Moot Simple",
};

export const CyberpunkTheme: Theme = {
  name: "Cyberpunk",
  background: "#000000",
  backgroundImage: "../assets/images/cyberpunk-city.jpg",
  cardBackground: "#1a1a1a",
  textPrimary: "#00ff00",
  textSecondary: "#00cc00",
  accent: "#ff00ff",
  buttonBackground: "#ff00ff",
  buttonText: "#000000",
  inputBackground: "#333333",
  inputText: "#00ff00",
  checkboxBorder: "#ff00ff",
  checkboxFill: "#ff00ff",
  font: "Code Squared",
};

export const themes = [WildWestTheme, FantasyTheme, CyberpunkTheme];
