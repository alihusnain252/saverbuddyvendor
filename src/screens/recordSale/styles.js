import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  recordSaleContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: MyTheme.backgroundColor,
  },
  noDisplay: {
    display: 'none',
  },
  notFound: {
    width: width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '2%',
  },
  userFoundNote: {
    width: width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '2%',
  },
  notFoundImage: {
    width: 15,
    height: 15,
  },
  notFoundText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    color: MyTheme.FireOpal,
    marginLeft: 4,
  },
  userFoundText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14,
    color: MyTheme.green,
    marginLeft: 4,
  },
  scrollView: {
    width: width - 40,
  },
  register: {
    width: width - 40,
    height: 56,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 69,
    backgroundColor: MyTheme.yellow,
  },
  registerText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: MyTheme.white,
  },
  createPress: {
    width: width - 40,
    height: 56,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 69,
    backgroundColor: MyTheme.yellow,
  },
  createPressText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: MyTheme.white,
  },
  okPres: {
    width: width - 91,
    height: 56,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 69,
    backgroundColor: MyTheme.accent,
  },
  okPresText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: MyTheme.white,
  },
  customerPhoneInput: {
    width: '80%',
  },
  checkText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 20,
    color: MyTheme.black,
    borderBottomWidth: 0.5,
  },
  emptyView: {
    width: width - 40,
    height: 86,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: MyTheme.fontFamily,
    justifyContent: 'space-between',
    fontStyle: 'normal',
    marginTop: 9,
    // fontSize: 12,
    color: MyTheme.labelBlack,
    width: '100%',
    backgroundColor: MyTheme.grey,
    borderRadius: 8,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  discountInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  noUserInput: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    marginTop: 9,
    // fontSize: 12,
    color: MyTheme.labelBlack,
    width: '100%',
    backgroundColor: MyTheme.Seashell,
    borderRadius: 8,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  discountInput1: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    marginTop: 9,
    // fontSize: 12,
    color: MyTheme.textPrimary,
    width: '40%',
    backgroundColor: MyTheme.grey,
    borderRadius: 8,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  discountInput2: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    marginTop: 9,
    // fontSize: 12,
    color: MyTheme.labelBlack,
    width: '55%',
    backgroundColor: MyTheme.grey,
    borderRadius: 8,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  noUserDiscountInput1: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    marginTop: 9,
    // fontSize: 12,
    color: MyTheme.labelBlack,
    width: '40%',
    backgroundColor: MyTheme.Seashell,
    borderRadius: 8,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  noUserDiscountInput2: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    marginTop: 9,
    // fontSize: 12,
    color: MyTheme.labelBlack,
    width: '55%',
    backgroundColor: MyTheme.Seashell,
    borderRadius: 8,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    width: '100%',
  },
  modalView: {
    width: width - 50,
    height: 245,
    backgroundColor: MyTheme.primary,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    height: 3,
    width: 53,
    marginTop: 15,
    backgroundColor: MyTheme.grey200,
  },
  modalText: {
    width: '100%',
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    color: MyTheme.black,
    marginTop: 17,
    marginLeft: 24,
  },
  successContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successImage: {
    width: 85,
    height: 70,
    marginTop: 20,
    borderWidth: 1,
    borderColor: MyTheme.green,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 25,
    color: MyTheme.black,
    marginTop: 17,
  },
  successMessage: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 20,
    color: MyTheme.black,
    marginTop: 7,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '40%',
    zIndex: 1,
    backgroundColor: '#00000080',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
