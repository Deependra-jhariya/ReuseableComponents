import {
  ColorValue,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
  NativeSyntheticEvent,
} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText';
import { AppColors } from '../../../../themes/AppColors/AppColors';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  onSubmit?: () => void;
  keyboardType?: KeyboardTypeOptions;
  style?: TextStyle;
  inputContainerStyle?: ViewStyle;
  textAlignVertical?: 'auto' | 'center' | 'top' | 'bottom';
  multiline?: boolean;
  iconFamily?: string;
  iconName?: string;
  isIcon?: React.ReactNode;
  isEndIcon?: React.ReactNode;
  placeholderColors?: ColorValue | undefined;
  isError?: string;
  secureTextEntry?: boolean;
}
const AppTextInput: React.FC<TextInputProps> = props => {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    onBlur,
    onSubmit,
    keyboardType,
    style,
    inputContainerStyle,
    textAlignVertical,
    multiline,
    iconFamily,
    iconName,
    isIcon,
    isEndIcon,
    placeholderColors,
    isError,
    secureTextEntry,
  } = props;
  return (
    <View style={styles?.inputContainer}>
      {label && (
        <Text style={styles?.labelStyle}>{label || 'Full Name *'}</Text>
      )}
      <View style={[styles?.inputMainView, inputContainerStyle]}>
        <View style={styles.inputView}>
          {isIcon && isIcon}
          <TextInput
            style={[styles?.inputStyle, style]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            textAlignVertical={textAlignVertical}
            multiline={multiline}
            placeholderTextColor={
              placeholderColors ? placeholderColors : AppColors.BlackColor
            }
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
          />
        </View>
        {isEndIcon && <View style={styles?.endIconStyle}>{isEndIcon}</View>}
      </View>
      {isError && (
        <AppText
          text={isError}
          textstyle={{
            fontSize: 13,
            color: AppColors?.redColor,
            marginVertical: 5,
          }}
        />
      )}
    </View>
  );
};

export default AppTextInput;
const styles = StyleSheet.create({
  inputContainer: {},
  inputMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: AppColors?.BlackColor,
    borderRadius: 5,
  },
  inputView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: AppColors.BGgrayColor,
    paddingHorizontal: 5,
  },
  inputStyle: {
    flex: 1,
    height: 50,
    borderColor: AppColors?.grayColor,
    color: AppColors?.BlackColor,
    fontSize: 14,
    // fontFamily: FontFamily?.Regular,
  },
  iconView: {
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  labelStyle: {
    fontSize: 15,
    color: AppColors?.BlackColor,
    // fontFamily: FontFamily?.Medium,
    marginVertical: 10,
  },
  endIconStyle: { alignSelf: 'center', marginHorizontal: 10 },
});
