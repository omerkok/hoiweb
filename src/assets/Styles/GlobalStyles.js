var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

export const globalStyles = {
  greenColor: '#779f7d',
  greenOpacity3: 'rgba(119, 159, 125,0.3)',
  greenOpacity5: 'rgba(119, 159, 125,0.5)',
  blackNewColor: '#15120f',
  blackColor: '#1f232a',
  blackDarkColor: '#000000',
  brownColor: '#7d575e',
  brownTextColor: '#3e2618',
  whiteColor: '#ffffff',
  whiteGreyColor: '#f5f5f5',
  whiteDarkColor: '#f9f7ee',
  darkGreyColor: '#3a3a3a',
  greyBlueColor: '#565d68',
  greyColor: '#848484',
  greyColor57: '#575757',
  yellowColor: '#dda01e',
  bejColor: '#f0eed8',
  softBlackColor:'#303030',
  h12: width < 400 ? 10 : width <= 579 ? 10 : width >= 580 ? 12 : 12,
  h14: width < 400 ? 11 : width <= 579 ? 12 : width >= 580 ? 14 : 14,
  h16: width < 400 ? 12 : width <= 579 ? 14 : width >= 580 ? 16 : 16,
  h18: width < 400 ? 14 : width <= 579 ? 16 : width >= 580 ? 18 : 18,
  h20: width < 400 ? 16 : width <= 579 ? 18 : width >= 580 ? 20 : 20,
  h24: width < 400 ? 20 : width <= 579 ? 22 : width >= 580 ? 24 : 24,
  h30: width < 400 ? 26 : width <= 579 ? 28 : width >= 580 ? 30 : 30,
  h32: 32,
  h35: width < 400 ? 31 : width <= 579 ? 33 : width >= 580 ? 35 : 35,
  h36: width < 400 ? 34 : width <= 579 ? 34 : width >= 580 ? 36 : 36,
  h40: 40,
  h42: 42,
  h48: 48,
  h60: width < 400 ? 56 : width <= 579 ? 58 : width >= 580 ? 60 : 60,
  h80: width < 400 ? 56 : width <= 579 ? 58 : width >= 580 ? 80 : 80,
  h100: width < 400 ? 56 : width <= 579 ? 58 : width >= 580 ? 100 : 100,
  h120: width < 400 ? 56 : width <= 579 ? 58 : width >= 580 ? 120 : 120,
  p3: '3%',
  p7: '7%',
  m5: '5%',
  m7: '5%',
  flagSize: 35,
};
