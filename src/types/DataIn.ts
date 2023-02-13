import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type FilterDataIn = {
  inActiveButtonStyle?: StyleProp<ViewStyle>;
  inActiveTextStyle?: StyleProp<TextStyle>;
  activeTextStyle?: StyleProp<TextStyle>;
  isMultiSelect?: boolean;
  isAllbuttonActive?: boolean;
  activeButtonStyle?: StyleProp<TextStyle>;
  sameWidth?: boolean;
};
