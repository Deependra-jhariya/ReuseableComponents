import { StyleSheet } from 'react-native';
import { AppColors } from '../AppColors/AppColors';

export const CommonStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.WhiteColor,
    paddingHorizontal:16
  },
  boldText: {
    fontSize: 18,
    color: AppColors.BlackColor,
  },
  middleText: {
    fontSize: 16,
    color: AppColors.BlackColor,
  },
});
