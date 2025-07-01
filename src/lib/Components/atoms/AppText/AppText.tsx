import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { CommonStyle } from '../../../../themes/commonStyles/CommonStyles';

interface AppTextProps {
  text: string;
  textstyle?: TextStyle;
}

const AppText: React.FC<AppTextProps> = props => {
  const { text, textstyle } = props;

  return (
    <View>
      <Text style={[CommonStyle.middleText, textstyle]}>{text}</Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({});
