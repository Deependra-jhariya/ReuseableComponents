import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { AppColors } from '../../../../themes/AppColors/AppColors';

interface AppButtonProps {
  text: string;
  textStyle?: TextStyle;
  viewStyle?: ViewStyle;
  leftIcon?: React.ReactNode;
  onSubmit?:()=>void;
}
const AppButton: React.FC<AppButtonProps> = props => {
  const { text, viewStyle, textStyle, leftIcon,onSubmit } = props;
  return (
    <TouchableOpacity style={[styles.BtnContainer, viewStyle]} onPress={onSubmit}>
      {leftIcon &&
        leftIcon}
      <Text style={[styles.appText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  BtnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.blueColor,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  appText: {
    textAlign: 'center',
    fontSize: 16,
    color: AppColors.WhiteColor,
  },
 
});
