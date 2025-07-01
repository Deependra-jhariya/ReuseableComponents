import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AppText from '../../../lib/Components/atoms/AppText/AppText';
import { CommonStyle } from '../../../themes/commonStyles/CommonStyles';
import { SignupStyle } from './SignupStyle';
import AppTextInput from '../../../lib/Components/atoms/AppTextInput/AppTextInput';
import { AppColors } from '../../../themes/AppColors/AppColors';
import AppButton from '../../../lib/Components/atoms/AppButton/AppButton';
import AppIcon from '../../../lib/Components/atoms/AppIcon/AppIcon';
import { AppImages } from '../../../themes/AppImages/AppImages';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={CommonStyle.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppText text={'Create Account'} textstyle={SignupStyle.headingText} />
        <AppTextInput
          label="Username"
          isIcon={
            <AppIcon
              name={'user'}
              type={'FontAwesome'}
              size={20}
              color={AppColors.grayColor}
              style={styles.iconStyle}
            />
          }
          value={username}
          onChangeText={text => setUsername(text)}
          placeholder="Enter your username"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderColors={AppColors.grayColor}
        />
        <AppTextInput
          label="Email"
          isIcon={
            <AppIcon
              name={'user'}
              type={'FontAwesome'}
              size={20}
              color={AppColors.grayColor}
              style={styles.iconStyle}
            />
          }
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter your email"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderColors={AppColors.grayColor}
        />
        <AppTextInput
          label="Password"
          isIcon={
            <AppIcon
              name={'user'}
              type={'FontAwesome'}
              size={20}
              color={AppColors.grayColor}
              style={styles.iconStyle}
            />
          }
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          inputContainerStyle={styles.inputContainerStyle}
          placeholderColors={AppColors.grayColor}
        />
        <AppButton
          text="Create Account"
          viewStyle={{
            marginTop: 24,
          }}
        />

        <AppText
          text="or use social account"
          textstyle={styles.socialHeading}
        />

        <AppButton
          text="Continue with Google"
          viewStyle={styles.medialBtnView}
          textStyle={styles.btnText}
          leftIcon={
            <Image source={AppImages.google} style={styles.leftImgStyle} />
          }
        />
        <AppButton
          text="Continue with Twitter"
          viewStyle={styles.medialBtnView}
          textStyle={styles.btnText}
          leftIcon={
            <Image source={AppImages.twitter} style={styles.leftImgStyle} />
          }
        />
        <AppButton
          text="Continue with Facebook"
          viewStyle={styles.medialBtnView}
          textStyle={styles.btnText}
          leftIcon={
            <Image source={AppImages.facebook} style={styles.leftImgStyle} />
          }
        />
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderColor: AppColors.BGgrayColor,
    borderWidth: 1,
  },
  iconStyle: { marginHorizontal: 5, alignSelf: 'center' },
  socialHeading: { textAlign: 'center', marginVertical: 16 },
  medialBtnView: {
    backgroundColor: AppColors.BGgrayColor,
  },
  btnText: {
    fontSize: 14,
    color: AppColors.BlackColor,
  },
  leftImgStyle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});
