import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type FilterDataIn = {
  inactiveButtonStyle?: StyleProp<ViewStyle>;
  textStyleProp?: StyleProp<TextStyle>;
  isMultiSelect?: boolean;
  isAllbuttonActive?: boolean;
  activeButtonStyle?: StyleProp<TextStyle>;
  sameWidth?: boolean;
};
