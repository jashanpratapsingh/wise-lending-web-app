import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const BusinessHomeVariation1 = () => {
  return (
    <View style={styles.businessHomeVariation}>
      <View style={styles.businessHomeVariationChild} />
      <View
        style={[
          styles.yxldhnzg400x400RemovebgPrevParent,
          styles.yxldhnzg400x400Layout,
        ]}
      >
        <Image
          style={[
            styles.yxldhnzg400x400RemovebgPrevIcon,
            styles.yxldhnzg400x400Layout,
          ]}
          contentFit="cover"
          source={require("../assets/yxldhnzg-400x400removebgpreview-9.png")}
        />
        <Image
          style={[styles.image1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.image2Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-21.png")}
        />
      </View>
      <View style={[styles.homeRow, styles.homeLayout]}>
        <Image
          style={[styles.homeRowChild, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-390.png")}
        />
        <View style={[styles.homeParent, styles.parentPosition1]}>
          <Text style={[styles.home, styles.transactionViewTypo]}>Home</Text>
          <Image
            style={[styles.homeFillIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/home-fill1.png")}
          />
        </View>
        <View style={[styles.darhboardParent, styles.parentPosition]}>
          <View style={[styles.homeFillIcon, styles.iconLayout]}>
            <View style={[styles.darhboardChild, styles.darhboardLayout]} />
            <View style={[styles.darhboardItem, styles.darhboardPosition]} />
            <View style={[styles.darhboardInner, styles.rectangleViewLayout]} />
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
          </View>
          <Text style={[styles.farms, styles.transactionViewTypo]}>Farms</Text>
        </View>
        <View style={[styles.exchangeParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.transactionViewTypo]}>
            Exchange
          </Text>
          <Image
            style={[styles.refresh2Icon, styles.refresh2IconPosition]}
            contentFit="cover"
            source={require("../assets/refresh-21.png")}
          />
        </View>
        <View style={styles.groupFillParent}>
          <Image
            style={[styles.refresh2Icon, styles.refresh2IconPosition]}
            contentFit="cover"
            source={require("../assets/group-fill2.png")}
          />
          <Text style={[styles.business, styles.businessTypo]}>Business</Text>
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.transactionViewTypo]}>
            Account
          </Text>
          <Image
            style={styles.userFillIcon}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
      </View>
      <View style={styles.listboxbgParent}>
        <View style={[styles.listboxbg, styles.listboxbgShadowBox]} />
        <Text style={[styles.transactionHistory, styles.textFlexBox]}>
          Transaction History
        </Text>
        <View
          style={[styles.mexcTransactionFeesParent, styles.feesParentLayout]}
        >
          <Text style={[styles.mexcTransaction, styles.textFlexBox]}>
            MEXC - Transaction Fees
          </Text>
          <Text style={[styles.text, styles.transactionViewTypo]}>
            $ 23,000.00
          </Text>
        </View>
        <View style={[styles.wiseLendingFeesParent, styles.feesParentLayout]}>
          <Text style={[styles.mexcTransaction, styles.textFlexBox]}>
            WISE - Lending Fees
          </Text>
          <Text style={[styles.text, styles.transactionViewTypo]}>
            $ 46,000.00
          </Text>
        </View>
      </View>
      <View style={styles.eyeParent}>
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.text2, styles.textFlexBox]}>$21,524.12</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Text style={[styles.businessBalance, styles.employeePayoutTypo]}>
          Business Balance
        </Text>
        <View style={styles.parent}>
          <Text style={[styles.text3, styles.textFlexBox]}>5.63%</Text>
          <Text style={[styles.h, styles.textFlexBox]}>24H</Text>
          <Image
            style={styles.arrowDropUpIcon}
            contentFit="cover"
            source={require("../assets/arrow-drop-up1.png")}
          />
        </View>
      </View>
      <View style={[styles.businessHomeVariationItem, styles.viewLayout1]} />
      <View
        style={[styles.viewFullTransactionHistoryParent, styles.viewLayout1]}
      >
        <Text style={[styles.viewFullTransaction, styles.viewLayout1]}>
          View full transaction history
        </Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
      </View>
      <Image
        style={styles.businessHomeVariationInner}
        contentFit="cover"
        source={require("../assets/group-8630.png")}
      />
      <View style={[styles.mParent, styles.parentFlexBox]}>
        <Text style={[styles.m, styles.mFlexBox]}>1M</Text>
        <Text style={[styles.m1, styles.mFlexBox]}>3M</Text>
        <Text style={[styles.m1, styles.mFlexBox]}>6M</Text>
        <Text style={[styles.m1, styles.mFlexBox]}>1Y</Text>
        <Text style={[styles.m1, styles.mFlexBox]}>ALL</Text>
      </View>
      <View style={[styles.groupParent, styles.parentPosition1]}>
        <View style={[styles.viewAllUpcomingPayoutsParent, styles.viewLayout]}>
          <Text
            style={[styles.viewAllUpcoming, styles.viewLayout]}
          >{`View all upcoming payouts `}</Text>
          <Image
            style={styles.arrowIcon1}
            contentFit="cover"
            source={require("../assets/arrow1.png")}
          />
        </View>
        <View style={[styles.payoutTileParent, styles.parentFlexBox]}>
          <View style={styles.payoutTile}>
            <View style={[styles.listboxbg1, styles.listboxbgShadowBox]} />
            <View
              style={[styles.employeePayoutParent, styles.refresh2IconPosition]}
            >
              <Text style={styles.employeePayoutTypo}>Employee Payout</Text>
              <Text style={[styles.text4, styles.textTypo]}>$21,524.12</Text>
              <View style={[styles.vectorParent, styles.groupItemLayout]}>
                <Image
                  style={[styles.groupItem, styles.groupItemLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-301.png")}
                />
                <Text style={[styles.days, styles.daysTypo]}>• 3 Days</Text>
              </View>
            </View>
          </View>
          <View style={[styles.payoutTile1, styles.listboxbgLayout]}>
            <View style={[styles.listboxbg2, styles.listboxbgLayout]} />
            <View
              style={[styles.employeePayoutParent, styles.refresh2IconPosition]}
            >
              <Text style={styles.employeePayoutTypo}>Automated Deposit</Text>
              <Text style={[styles.text5, styles.textTypo]}>$40,524.12</Text>
              <View style={[styles.vectorParent, styles.groupItemLayout]}>
                <Image
                  style={[styles.groupItem, styles.groupItemLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-302.png")}
                />
                <Text style={[styles.days1, styles.daysTypo]}>• 6 Days</Text>
              </View>
            </View>
          </View>
          <View style={[styles.payoutTile1, styles.listboxbgLayout]}>
            <View style={[styles.listboxbg3, styles.listboxbgLayout]} />
            <View
              style={[styles.employeePayoutParent, styles.refresh2IconPosition]}
            >
              <Text style={styles.employeePayoutTypo}>Automated Deposit</Text>
              <Text style={[styles.text5, styles.textTypo]}>$40,524.12</Text>
              <View style={styles.vectorContainer}>
                <Image
                  style={[styles.groupItem, styles.groupItemLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-302.png")}
                />
                <Text style={[styles.days2, styles.daysTypo]}>• 32 Days</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.paymentSchedule, styles.textTypo]}>
          Payment Schedule
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yxldhnzg400x400Layout: {
    height: 62,
    position: "absolute",
  },
  iconPosition: {
    height: 44,
    top: 9,
    position: "absolute",
  },
  homeLayout: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  parentPosition1: {
    left: 24,
    position: "absolute",
  },
  transactionViewTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDimgray_600,
  },
  iconLayout: {
    height: 35,
    width: 35,
    top: 0,
  },
  parentPosition: {
    height: 48,
    top: 21,
    position: "absolute",
  },
  darhboardLayout: {
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    borderRadius: Border.br_12xs,
    left: "13.71%",
    right: "55.43%",
    width: "30.86%",
    height: "30.86%",
    position: "absolute",
  },
  darhboardPosition: {
    bottom: "13.71%",
    top: "55.43%",
  },
  rectangleViewLayout: {
    left: "55.43%",
    right: "13.71%",
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    borderRadius: Border.br_12xs,
    width: "30.86%",
    height: "30.86%",
    position: "absolute",
  },
  refresh2IconPosition: {
    left: 10,
    position: "absolute",
  },
  businessTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  listboxbgShadowBox: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  feesParentLayout: {
    height: 17,
    width: 300,
    left: 14,
    position: "absolute",
  },
  employeePayoutTypo: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  viewLayout1: {
    height: 18,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  mFlexBox: {
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  viewLayout: {
    height: 21,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  groupItemLayout: {
    width: 66,
    height: 23,
  },
  daysTypo: {
    width: 64,
    top: 4,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  listboxbgLayout: {
    width: 131,
    height: 100,
  },
  businessHomeVariationChild: {
    width: 390,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  yxldhnzg400x400RemovebgPrevIcon: {
    left: 165,
    width: 58,
    top: 0,
  },
  image1Icon: {
    width: 48,
    left: 0,
  },
  image2Icon: {
    left: 291,
    width: 99,
  },
  yxldhnzg400x400RemovebgPrevParent: {
    top: 33,
    left: 0,
    width: 390,
  },
  homeRowChild: {
    top: 0,
  },
  home: {
    top: 35,
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  homeFillIcon: {
    left: 0,
    position: "absolute",
  },
  homeParent: {
    top: 19,
    height: 50,
    width: 35,
  },
  darhboardChild: {
    bottom: "55.43%",
    top: "13.71%",
  },
  darhboardItem: {
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    borderRadius: Border.br_12xs,
    left: "13.71%",
    right: "55.43%",
    width: "30.86%",
    height: "30.86%",
    position: "absolute",
  },
  darhboardInner: {
    bottom: "13.71%",
    top: "55.43%",
  },
  rectangleView: {
    bottom: "55.43%",
    top: "13.71%",
  },
  farms: {
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    top: 33,
    left: 0,
    position: "absolute",
  },
  darhboardParent: {
    left: 96,
    width: 35,
  },
  refresh2Icon: {
    height: 35,
    width: 35,
    top: 0,
  },
  exchangeParent: {
    left: 168,
    width: 55,
  },
  business: {
    top: 34,
    color: Color.colorGray_200,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  groupFillParent: {
    top: 20,
    left: 244,
    width: 54,
    height: 49,
    position: "absolute",
  },
  userFillIcon: {
    height: 33,
    left: 6,
    width: 35,
    top: 0,
    position: "absolute",
  },
  accountParent: {
    left: 319,
    width: 47,
  },
  homeRow: {
    top: 757,
  },
  listboxbg: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    right: "0%",
    width: "100%",
  },
  transactionHistory: {
    top: 13,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 14,
    textAlign: "left",
  },
  mexcTransaction: {
    width: 181,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
    top: 0,
  },
  text: {
    left: 192,
    textAlign: "right",
    width: 108,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_600,
    top: 0,
    position: "absolute",
  },
  mexcTransactionFeesParent: {
    top: 45,
  },
  wiseLendingFeesParent: {
    top: 82,
  },
  listboxbgParent: {
    height: "14.81%",
    width: "85.64%",
    top: "67.65%",
    right: "7.18%",
    bottom: "17.54%",
    left: "7.18%",
    position: "absolute",
  },
  eyeIcon: {
    top: 1,
    left: 115,
    width: 13,
    height: 13,
    position: "absolute",
  },
  text2: {
    top: 24,
    fontSize: FontSize.size_9xl,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 6,
  },
  groupChild: {
    height: "18.18%",
    width: "3.37%",
    top: "37.5%",
    bottom: "44.32%",
    left: "96.63%",
    maxWidth: "100%",
    maxHeight: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  businessBalance: {
    left: 7,
    top: 0,
    position: "absolute",
  },
  text3: {
    left: 21,
    color: Color.colorSeagreen,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  h: {
    left: 57,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  arrowDropUpIcon: {
    top: 2,
    width: 24,
    height: 24,
    left: 0,
    position: "absolute",
  },
  parent: {
    top: 62,
    width: 81,
    height: 26,
    left: 0,
    position: "absolute",
  },
  eyeParent: {
    top: 110,
    left: 20,
    width: 178,
    height: 88,
    position: "absolute",
  },
  businessHomeVariationItem: {
    top: 706,
    left: 144,
    width: 108,
  },
  viewFullTransaction: {
    width: 195,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
    top: 0,
  },
  arrowIcon: {
    top: 5,
    left: 200,
    width: 14,
    height: 9,
    position: "absolute",
  },
  viewFullTransactionHistoryParent: {
    top: 719,
    left: 88,
    width: 214,
  },
  businessHomeVariationInner: {
    top: 438,
    width: 461,
    height: 83,
    left: 0,
    position: "absolute",
  },
  m: {
    width: 19,
  },
  m1: {
    width: 32,
    marginLeft: 20,
  },
  mParent: {
    top: 530,
    left: 81,
  },
  viewAllUpcoming: {
    width: 188,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
    top: 0,
  },
  arrowIcon1: {
    top: 6,
    left: 188,
    width: 12,
    height: 10,
    position: "absolute",
  },
  viewAllUpcomingPayoutsParent: {
    top: 172,
    left: 70,
    width: 200,
  },
  listboxbg1: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    right: "0%",
    width: "100%",
  },
  text4: {
    marginTop: 10,
    color: Color.colorRed,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupItem: {
    borderRadius: Border.br_81xl,
    height: 23,
    left: 0,
    top: 0,
    position: "absolute",
  },
  days: {
    left: 1,
    width: 64,
    top: 4,
    color: Color.colorRed,
  },
  vectorParent: {
    height: 23,
    marginTop: 10,
  },
  employeePayoutParent: {
    top: 9,
    left: 10,
  },
  payoutTile: {
    width: 129,
    height: 100,
  },
  listboxbg2: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    left: 0,
    top: 0,
  },
  text5: {
    marginTop: 10,
    color: Color.colorSeagreen,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  days1: {
    left: 1,
    width: 64,
    top: 4,
    color: Color.colorSeagreen,
  },
  payoutTile1: {
    marginLeft: 20,
  },
  listboxbg3: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    left: 0,
    top: 0,
  },
  days2: {
    left: 5,
    width: 64,
    top: 4,
    color: Color.colorSeagreen,
  },
  vectorContainer: {
    width: 69,
    height: 23,
    marginTop: 10,
  },
  payoutTileParent: {
    top: 46,
    height: 116,
    left: 0,
  },
  paymentSchedule: {
    width: 220,
    height: 28,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
    top: 0,
  },
  groupParent: {
    top: 220,
    width: 431,
    height: 193,
  },
  businessHomeVariation: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
  },
});

export default BusinessHomeVariation1;
