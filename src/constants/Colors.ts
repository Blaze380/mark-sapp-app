const tintColorLight = '#fff';
const tintColorDark = '#0F87BF';

export default {
  light: {
    text: '#000',
    placeholder: "#ccc",
    background: '#ffff',
    tint: tintColorLight,
    bottomSheetBackground: "white",
    tabIconDefault: '#0000',
    tabIconSelected: tintColorDark,
    statusBarColor: "#ffff",
    buttonBackground: "#0F87BF",
    buttonText: "#000",
    color: "#0A5375",
  },
  dark: {
    text: '#ffff',
    placeholder: "#0A5375",
    background: '#0A5375',
    bottomSheetBackground: "black",
    tint: tintColorDark,
    tabIconDefault: tintColorLight,
    tabIconSelected: tintColorDark,
    statusBarColor: "#0A5375",
    buttonBackground: tintColorDark,
    buttonText: "#ffff",
    color: "#ffff",
  },
};
