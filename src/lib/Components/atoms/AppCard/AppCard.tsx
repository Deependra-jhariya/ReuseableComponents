import {StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';

// componets
import DividerLine from '../../atoms/DividerLine/DividerLine';
import { AppColors } from '../../../../themes/AppColors/AppColors';

interface CardProps {
  style?:StyleProp<ViewStyle>;
  tittle?: String;
  subTittle?: String;
  Divider?: boolean;
  cardChildren?: React.ReactNode;
  tittleTestStyle?: TextStyle;
  subTittleTestStyle?: TextStyle;
}

const AppCard: React.FC<CardProps> = props => {
  const {
    style,
    tittle,
    subTittle,
    Divider,
    cardChildren,
    tittleTestStyle,
    subTittleTestStyle,
  } = props;
  return (
    <View style={[styles?.cardContainer, style]}>
      {tittle && (
        <Text style={[styles?.cardHeading, tittleTestStyle]}>{tittle}</Text>
      )}
      {Divider && <DividerLine thickness={1} />}
      {subTittle && (
        <Text style={[styles?.cardSubHeading, subTittleTestStyle]}>
          {subTittle}
        </Text>
      )}
      {cardChildren && <View>{cardChildren}</View>}
    </View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
     cardContainer: {
    borderWidth: 1,
    borderColor: AppColors?.lightWhiteColor,
    backgroundColor: AppColors?.WhiteColor,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor:AppColors?.grayColor,
    shadowOffset:{
      width:0,
      height:5
    },
    shadowOpacity:1,
    shadowRadius:4
  },
  cardHeading: {
    fontSize: 25,
    // fontWeight: 'bold',
    color: AppColors?.WhiteColor,
    textAlign: 'center',
    // letterSpacing: 1.5,
  },
  cardSubHeading: {
    fontSize: 18,
    color: AppColors?.WhiteColor,
    textAlign: 'center',
    // letterSpacing: 1.5,
  }
});
