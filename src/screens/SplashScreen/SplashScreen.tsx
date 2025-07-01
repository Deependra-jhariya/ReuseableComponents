import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AppImages } from '../../themes/AppImages/AppImages';
import { CommonStyle } from '../../themes/commonStyles/CommonStyles';
import { SplashStyle } from './SplashStyles';
import AppText from '../../lib/Components/atoms/AppText/AppText';
import AppButton from '../../lib/Components/atoms/AppButton/AppButton';

const SplashScreen = () => {
  return (
    <View style={CommonStyle.mainContainer}>
      <Image source={AppImages.splash} style={SplashStyle.img} />
      <AppText
        text={'Welcome to this Application.'}
        textstyle={SplashStyle.headingText}
      />
      <AppButton text={"Get Started"}/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
