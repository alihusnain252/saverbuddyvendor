import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  ordersHistoryContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: MyTheme.backgroundColor,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '5%',
  },
  noDisplay: {
    display: 'none',
  },
  filterPress: {
    width: 88,
    padding: '3%',
    backgroundColor: MyTheme.yellow,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 14,
    color: MyTheme.textPrimary,
  },
  filterInputs: {
    alignItems: 'center',
    width: width,
    borderTopColor: MyTheme.metallicYellow,
    paddingTop: '3%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  filterByView: {
    marginTop: 10,
    width: width - 32,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  filterByText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    color: MyTheme.black,
  },
  dateInputContainer: {
    marginTop: 13,
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // fontSize: 12,
    color: MyTheme.labelBlack,
    width: width - 32,
    backgroundColor: MyTheme.white,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  startDate: {
    paddingLeft: '3%',
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    // fontSize: 12,
    color: MyTheme.textPrimary,
    width: '45%',
    backgroundColor: MyTheme.white,
    borderRadius: 8,
  },
  endDate: {
    paddingLeft: '3%',
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    // fontSize: 12,
    color: MyTheme.labelBlack,
    width: '50%',
    backgroundColor: MyTheme.white,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  filterByNumber: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 11,
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    // fontSize: 12,
    color: MyTheme.labelBlack,
    height: 46,
    width: width - 32,
    backgroundColor: MyTheme.white,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    paddingHorizontal: 16,
  },
  filterNumber: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    color: MyTheme.labelBlack,
    width: '80%',
  },
  searchIcon: {
    width: 14,
    height: 14,
  },
  searchIconPress: {
    paddingHorizontal: 17,
  },
  searchPress: {
    alignSelf: 'flex-end',
    width: 111,
    height: 36,
    marginVertical: 12,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: MyTheme.yellow,
  },
  searchPressText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: MyTheme.white,
  },
  ordersList: {
    marginVertical: 12,
    height: height / 1.25,
    // marginBottom:20,
  },
  ordersListFilter: {
    marginVertical: 12,
    height: height / 2,
    // marginBottom:20,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 6,
    marginHorizontal: 2,
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    // fontSize: 12,
    color: MyTheme.labelBlack,
    height: 61,
    width: width - 32,
    backgroundColor: MyTheme.primary,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  downloadBtn: {
    position: 'absolute',
    bottom: 25,
    width: width - 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  downloadPress: {
    width: '45%',
    backgroundColor: MyTheme.black,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 43,
    borderRadius: 4,
    marginTop: 41,
  },
  downloadText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 11,
    color: MyTheme.white,
    marginLeft: 7,
  },
  orderDetails: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    marginLeft: 5,
  },
  orderIndex: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 11,
    color: MyTheme.labelBlack,
    marginTop: 5,
  },
  orderCustomerId: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 11,
    color: MyTheme.labelBlack,
    marginTop: 5,
  },
  orderTime: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 11,
    color: MyTheme.labelBlack,
    marginTop: 5,
  },
  orderPriceView: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  orderPrice: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 11,
    padding: 20,
    color: MyTheme.labelBlack,
  },
});
