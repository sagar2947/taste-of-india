const tintColorLight = {
  primary: '#6200EE',  // Purple
  blue: '#1E88E5',     // Bright Blue
  green: '#4CAF50',    // Vibrant Green
  orange: '#FF5722',   // Deep Orange
  teal: '#009688',     // Teal
  pink: '#E91E63',     // Pink
};

const tintColorDark = {
  primary: '#BB86FC',  // Light Purple
  blue: '#03A9F4',     // Electric Blue
  green: '#CDDC39',    // Lime Green
  red: '#D32F2F',      // Crimson Red
  cyan: '#00BCD4',     // Cyan
  purple: '#9C27B0',   // Purple
};


export default {
  light: {
    primaryText: '#000000', // black
    secondaryText: '#606060', // medium gray
    background: '#FFFFFF', // white
    tint: tintColorLight.primary, // purple
    tabIconDefault: '#E0E0E0', // light gray
    tabIconSelected: tintColorLight.orange, // purple
    buttonBackground: '#6200EE', // purple
    buttonText: '#FFFFFF', // white
    border: '#E0E0E0', // light gray
    error: '#B00020', // dark red
    success: '#388E3C', // dark green
    link: '#1E88E5', // blue
    headerBackground: '#F5F5F5', // light gray
    cardBackground: '#F8F9FA', // white
    highlight: '#FFEB3B', // yellow
    disabled: '#BDBDBD', // light gray
  },
  dark: {
    primaryText: '#E0E0E0', // light gray
    secondaryText: '#B0B0B0', // medium gray
    background: '#121212', // dark gray
    tint: tintColorDark.primary, // light purple
    tabIconDefault: '#E0E0E0', // light gray
    tabIconSelected: tintColorDark.blue, // light purple
    buttonBackground: '#03DAC6', // teal
    buttonText: '#000000', // black
    border: '#333333', // dark gray
    error: '#CF6679', // light red
    success: '#4CAF50', // green
    link: '#8AB4F8', // light blue
    headerBackground: '#1F1B24', // slightly lighter dark gray
    cardBackground: '#1E1E1E', // charcoal gray
    highlight: '#FFD54F', // yellow
    disabled: '#616161', // dark gray
  },
};
