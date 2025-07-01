import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import { AppColors } from './src/themes/AppColors/AppColors';
import Signup from './src/screens/Authentication/SignUp/Signup';

const App = () => {
  return (
    <>
      {/* <SplashScreen /> */}
      <Signup/>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
