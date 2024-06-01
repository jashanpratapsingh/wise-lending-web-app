import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const BusinessHome = () => {
  return (
    <View style={styles.businessHome}>
      <View style={styles.businessHomeChild} />
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <Image
          style={[styles.frameItem, styles.eyeIconPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Text style={[styles.forPayees, styles.textTypo1]}>For Payees</Text>
        <Text style={[styles.forPayers, styles.textTypo1]}>For Payers</Text>
      </View>
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
        <View style={styles.homeParent}>
          <Text style={[styles.home, styles.viewTypo]}>Home</Text>
          <Image
            style={[styles.homeFillIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/home-fill.png")}
          />
        </View>
        <View style={[styles.darhboardParent, styles.parentPosition]}>
          <View style={[styles.homeFillIcon, styles.iconLayout]}>
            <View style={[styles.darhboardChild, styles.darhboardLayout]} />
            <View style={[styles.darhboardItem, styles.darhboardPosition]} />
            <View style={[styles.darhboardInner, styles.rectangleViewLayout]} />
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
          </View>
          <Text style={[styles.farms, styles.viewTypo]}>Farms</Text>
        </View>
        <View style={[styles.exchangeParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.viewTypo]}>Exchange</Text>
          <Image
            style={[styles.refresh2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/refresh-21.png")}
          />
        </View>
        <View style={styles.groupFillParent}>
          <Image
            style={[styles.refresh2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-fill2.png")}
          />
          <Text style={styles.business}>Business</Text>
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.viewTypo]}>Account</Text>
          <Image
            style={[styles.userFillIcon, styles.text8Position]}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
      </View>
      <View style={[styles.listboxbgParent, styles.listboxbgParentPosition]}>
        <View style={styles.listboxbgShadowBox} />
        <Text style={[styles.transactionHistory, styles.payoutsTypo]}>
          Transaction History
        </Text>
        <View
          style={[styles.mexcTransactionFeesParent, styles.feesParentLayout]}
        >
          <Text style={[styles.mexcTransaction, styles.viewTypo]}>
            MEXC - Transaction Fees
          </Text>
          <Text style={[styles.text, styles.textTypo]}>$ 23,000.00</Text>
        </View>
        <View style={[styles.wiseLendingFeesParent, styles.feesParentLayout]}>
          <Text style={[styles.mexcTransaction, styles.viewTypo]}>
            WISE - Lending Fees
          </Text>
          <Text style={[styles.text, styles.textTypo]}>$ 46,000.00</Text>
        </View>
      </View>
      <View style={[styles.businessHomeInner, styles.listboxbgParentPosition]}>
        <View style={styles.listboxbgGroup}>
          <View style={styles.listboxbgShadowBox} />
          <Text style={[styles.payouts, styles.payoutsTypo]}>Payouts</Text>
          <View
            style={[styles.mikeWazowskiParent, styles.frameWrapperPosition]}
          >
            <Text style={[styles.mikeWazowski, styles.viewTypo]}>
              Mike Wazowski
            </Text>
            <Text style={[styles.text2, styles.textTypo]}>03/04/2024</Text>
            <Text style={[styles.text3, styles.textTypo]}>$ 6900.69</Text>
          </View>
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <View style={styles.donaldDuckParent}>
              <Text style={[styles.mikeWazowski, styles.viewTypo]}>
                Donald Duck
              </Text>
              <Text style={[styles.text2, styles.textTypo]}>02/03/2024</Text>
              <Text style={[styles.text3, styles.textTypo]}>$ 2324.21</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.mikeOxmaulParent}>
        <Text style={[styles.mikeWazowski, styles.viewTypo]}>Mike Oxmaul</Text>
        <Text style={[styles.text2, styles.textTypo]}>03/03/2024</Text>
        <Text style={[styles.text3, styles.textTypo]}>$ 1700.00</Text>
      </View>
      <View style={styles.eyeParent}>
        <Image
          style={[styles.eyeIcon, styles.eyeIconPosition]}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.text8, styles.text8Position]}>$21,524.12</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Text style={[styles.businessBalance, styles.payoutsTypo]}>
          Business Balance
        </Text>
        <View style={styles.parent}>
          <Text style={[styles.text9, styles.textTypo1]}>5.63%</Text>
          <Text style={[styles.h, styles.textTypo1]}>24H</Text>
          <Image
            style={styles.arrowDropUpIcon}
            contentFit="cover"
            source={require("../assets/arrow-drop-up1.png")}
          />
        </View>
      </View>
      <View style={[styles.businessHomeItem, styles.viewParentLayout]} />
      <View
        style={[
          styles.viewFullTransactionHistoryParent,
          styles.viewParentLayout,
        ]}
      >
        <Text
          style={[styles.viewFullTransaction, styles.viewParentLayout]}
        >{`View Full Transaction History `}</Text>
        <Image
          style={[styles.arrowIcon, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
      </View>
      <View
        style={[styles.viewPastUpcomingPayoutsParent, styles.viewParentLayout]}
      >
        <Text
          style={[styles.viewPast, styles.viewParentLayout]}
        >{`View Past & Upcoming Payouts `}</Text>
        <Image
          style={[styles.arrowIcon1, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eyeIconPosition: {
    top: 1,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
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
  viewTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDimgray_600,
  },
  iconLayout: {
    height: 35,
    width: 35,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    height: 48,
    top: 21,
    position: "absolute",
  },
  darhboardLayout: {
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderRadius: Border.br_12xs,
    left: "13.71%",
    right: "55.43%",
    width: "30.86%",
    height: "30.86%",
    borderStyle: "solid",
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
    borderRadius: Border.br_12xs,
    width: "30.86%",
    height: "30.86%",
    borderStyle: "solid",
    position: "absolute",
  },
  text8Position: {
    left: 6,
    position: "absolute",
  },
  listboxbgParentPosition: {
    left: "7.18%",
    right: "7.18%",
    width: "85.64%",
    position: "absolute",
  },
  payoutsTypo: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  feesParentLayout: {
    height: 17,
    left: 14,
    width: 300,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  frameWrapperPosition: {
    left: 13,
    flexDirection: "row",
    position: "absolute",
  },
  viewParentLayout: {
    height: 18,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 9,
    width: 14,
    top: 5,
    position: "absolute",
  },
  businessHomeChild: {
    width: 390,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  frameChild: {
    top: -1,
    left: -1,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorDarkgray_500,
    borderWidth: 1,
    width: 302,
    height: 33,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  frameItem: {
    left: 149,
    width: 150,
    height: 29,
    borderRadius: Border.br_81xl,
    top: 1,
  },
  forPayees: {
    left: 187,
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: 7,
    fontWeight: "500",
    position: "absolute",
  },
  forPayers: {
    left: 40,
    color: Color.colorDarkgray_400,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: 7,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleParent: {
    top: 225,
    left: 48,
    height: 31,
    width: 300,
    position: "absolute",
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
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  homeFillIcon: {
    left: 0,
  },
  homeParent: {
    top: 19,
    left: 24,
    height: 50,
    width: 35,
    position: "absolute",
  },
  darhboardChild: {
    bottom: "55.43%",
    top: "13.71%",
  },
  darhboardItem: {
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderRadius: Border.br_12xs,
    left: "13.71%",
    right: "55.43%",
    width: "30.86%",
    height: "30.86%",
    borderStyle: "solid",
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
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    top: 33,
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  darhboardParent: {
    left: 96,
    width: 35,
  },
  refresh2Icon: {
    left: 10,
  },
  exchangeParent: {
    left: 168,
    width: 55,
  },
  business: {
    top: 34,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  groupFillParent: {
    top: 20,
    left: 244,
    width: 54,
    height: 49,
    position: "absolute",
  },
  userFillIcon: {
    width: 35,
    height: 33,
    top: 0,
  },
  accountParent: {
    left: 319,
    width: 47,
  },
  homeRow: {
    top: 757,
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    width: "100%",
  },
  transactionHistory: {
    top: 13,
    textAlign: "left",
    left: 14,
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_sm,
  },
  mexcTransaction: {
    width: 181,
    textAlign: "left",
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    left: 192,
    width: 108,
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
    top: "63.98%",
    bottom: "21.21%",
  },
  payouts: {
    top: 14,
    textAlign: "left",
    left: 14,
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_sm,
  },
  mikeWazowski: {
    width: 136,
    textAlign: "left",
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_sm,
  },
  text2: {
    width: 83,
  },
  text3: {
    width: 81,
  },
  mikeWazowskiParent: {
    top: 46,
    flexDirection: "row",
  },
  donaldDuckParent: {
    flexDirection: "row",
  },
  frameWrapper: {
    top: 119,
    flexDirection: "row",
  },
  listboxbgGroup: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  businessHomeInner: {
    height: "19.43%",
    top: "35.9%",
    bottom: "44.67%",
  },
  mikeOxmaulParent: {
    top: 385,
    left: 41,
    flexDirection: "row",
    position: "absolute",
  },
  eyeIcon: {
    left: 115,
    width: 13,
    height: 13,
  },
  text8: {
    top: 24,
    fontSize: FontSize.size_9xl,
    color: Color.colorGray_400,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupChild: {
    height: "18.18%",
    width: "3.37%",
    top: "37.5%",
    bottom: "44.32%",
    left: "96.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    right: "0%",
    position: "absolute",
  },
  businessBalance: {
    left: 7,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  text9: {
    left: 21,
    color: Color.colorSeagreen,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  h: {
    left: 57,
    textAlign: "left",
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
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
    height: 26,
    width: 81,
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
  businessHomeItem: {
    top: 706,
    left: 144,
    width: 108,
  },
  viewFullTransaction: {
    width: 195,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  arrowIcon: {
    left: 200,
  },
  viewFullTransactionHistoryParent: {
    top: 688,
    left: 88,
    width: 214,
  },
  viewPast: {
    width: 212,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  arrowIcon1: {
    left: 212,
  },
  viewPastUpcomingPayoutsParent: {
    top: 492,
    left: 76,
    width: 226,
  },
  businessHome: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default BusinessHome;
