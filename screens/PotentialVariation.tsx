import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const PotentialVariation = () => {
  return (
    <View style={styles.potentialVariation}>
      <View
        style={[
          styles.potentialVariationChild,
          styles.potentialVariationChildLayout,
        ]}
      />
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
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
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
          <Text style={[styles.farms, styles.homeTypo]}>Farms</Text>
        </View>
        <View style={[styles.exchangeParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeTypo]}>Exchange</Text>
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
            source={require("../assets/group-fill4.png")}
          />
          <Text style={styles.business}>Business</Text>
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeTypo]}>Account</Text>
          <Image
            style={styles.userFillIcon}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
      </View>
      <View style={styles.eyeParent}>
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>$21,524.12</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Text style={[styles.walletBalance, styles.nextPaymentTypo]}>
          Wallet Balance
        </Text>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textFlexBox]}>5.63%</Text>
          <Text style={[styles.h, styles.textFlexBox]}>24H</Text>
          <Image
            style={styles.arrowDropUpIcon}
            contentFit="cover"
            source={require("../assets/arrow-drop-up1.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentPosition1]}>
        <View style={styles.viewAllUpcomingPayoutsParent}>
          <Text
            style={[styles.viewAllUpcoming, styles.viewAllUpcomingLayout]}
          >{`View all upcoming payouts `}</Text>
          <Image
            style={[styles.arrowIcon, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow1.png")}
          />
        </View>
        <View style={styles.payoutTileParent}>
          <View style={styles.payoutTile}>
            <View style={[styles.listboxbg, styles.listboxbgShadowBox]} />
            <View style={[styles.groupContainer, styles.frameViewPosition]}>
              <View style={styles.groupItemLayout}>
                <Image
                  style={[styles.groupItem, styles.groupPosition]}
                  contentFit="cover"
                  source={require("../assets/rectangle-303.png")}
                />
                <Text style={[styles.loanAmount, styles.loanAmountTypo]}>
                  Loan Amount
                </Text>
              </View>
              <Text style={[styles.text2, styles.textTypo]}>$21,524.12</Text>
            </View>
          </View>
          <View style={styles.listboxbgParent}>
            <View style={[styles.listboxbg1, styles.listboxbgShadowBox]} />
            <View style={[styles.frameView, styles.frameViewPosition]}>
              <View style={styles.groupLayout}>
                <Image
                  style={[styles.groupInner, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-304.png")}
                />
                <Text style={[styles.totalToRepay, styles.loanAmountTypo]}>
                  Total to Repay
                </Text>
              </View>
              <Text style={[styles.text3, styles.textTypo]}>$40,524.12</Text>
            </View>
          </View>
        </View>
        <Text style={styles.wiseProtocolInc}>Wise Protocol Inc.</Text>
      </View>
      <View
        style={[styles.applyForNewFinancingParent, styles.nextPaymentPosition]}
      >
        <Text style={[styles.applyForNew, styles.textFlexBox]}>
          Apply for new financing
        </Text>
        <Image
          style={[styles.arrowIcon1, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow2.png")}
        />
      </View>
      <View style={[styles.backgroundParent, styles.backgroundLayout]}>
        <Image
          style={[styles.backgroundIcon, styles.backgroundLayout]}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={[styles.backgroundIcon, styles.backgroundLayout]}
          contentFit="cover"
          source={require("../assets/front.png")}
        />
        <View
          style={[styles.withdrawn2152412Parent, styles.viewAllUpcomingLayout]}
        >
          <Text style={[styles.withdrawn2152412, styles.viewAllUpcomingLayout]}>
            Withdrawn: $21,524.12
          </Text>
          <Text style={[styles.text4, styles.textFlexBox]}>$40,524.12</Text>
          <View style={[styles.vectorContainer, styles.groupLayout]}>
            <Image
              style={[styles.groupInner, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-305.png")}
            />
            <Text style={[styles.totalToRepay, styles.loanAmountTypo]}>
              Available Amount
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.nextPayment, styles.nextPaymentPosition]}>
        Next Payment
      </Text>
      <View style={[styles.groupView, styles.groupLayout]}>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-305.png")}
        />
        <Text style={[styles.totalToRepay, styles.loanAmountTypo]}>
          May 31, 2024
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  potentialVariationChildLayout: {
    width: 390,
    left: 0,
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
  parentPosition1: {
    left: 24,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
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
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  nextPaymentTypo: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  viewAllUpcomingLayout: {
    width: 188,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 10,
    width: 12,
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
  frameViewPosition: {
    left: "50%",
    top: 9,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  loanAmountTypo: {
    left: 2,
    top: 4,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo: {
    marginTop: 10,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupLayout: {
    width: 113,
    height: 23,
  },
  nextPaymentPosition: {
    left: 26,
    position: "absolute",
  },
  backgroundLayout: {
    height: 236,
    width: 236,
    position: "absolute",
  },
  potentialVariationChild: {
    backgroundColor: Color.colorWhite,
    width: 390,
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
    width: 390,
    left: 0,
  },
  homeRowChild: {
    top: 0,
  },
  home: {
    top: 35,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  homeFillIcon: {
    left: 0,
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
    fontSize: FontSize.size_xs,
    top: 33,
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
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_xs,
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
  eyeIcon: {
    top: 1,
    left: 115,
    width: 13,
    height: 13,
    position: "absolute",
  },
  text: {
    top: 24,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_9xl,
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
  walletBalance: {
    left: 7,
    top: 0,
    position: "absolute",
  },
  text1: {
    color: Color.colorSeagreen,
    left: 21,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  h: {
    left: 57,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
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
  viewAllUpcoming: {
    fontSize: FontSize.size_sm,
    height: 21,
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
    top: 0,
  },
  arrowIcon: {
    top: 6,
    left: 188,
  },
  viewAllUpcomingPayoutsParent: {
    top: 172,
    left: 70,
    width: 200,
    height: 21,
    position: "absolute",
  },
  listboxbg: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  groupItem: {
    height: 23,
    width: 102,
  },
  loanAmount: {
    color: Color.colorRed,
    width: 99,
  },
  groupItemLayout: {
    height: 23,
    width: 102,
  },
  text2: {
    color: Color.colorRed,
  },
  groupContainer: {
    marginLeft: -50.5,
  },
  payoutTile: {
    width: 149,
    height: 100,
  },
  listboxbg1: {
    width: 150,
    height: 100,
    left: 0,
    top: 0,
  },
  groupInner: {
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  totalToRepay: {
    width: 110,
    color: Color.colorSeagreen,
  },
  text3: {
    color: Color.colorSeagreen,
  },
  frameView: {
    marginLeft: -56,
  },
  listboxbgParent: {
    marginLeft: 25,
    width: 150,
    height: 100,
  },
  payoutTileParent: {
    top: 46,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  wiseProtocolInc: {
    color: Color.colorBlack,
    width: 219,
    height: 28,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    top: 220,
    width: 324,
    height: 193,
  },
  applyForNew: {
    width: 138,
    height: 21,
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
  },
  arrowIcon1: {
    top: 3,
    left: 138,
  },
  applyForNewFinancingParent: {
    top: 730,
    width: 150,
    height: 21,
  },
  backgroundIcon: {
    left: 0,
    top: 0,
  },
  withdrawn2152412: {
    top: 57,
    height: 21,
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
    fontSize: FontSize.size_xs,
  },
  text4: {
    top: 23,
    left: 19,
    color: Color.colorSeagreen,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_9xl,
  },
  vectorContainer: {
    left: 40,
    top: 0,
    position: "absolute",
  },
  withdrawn2152412Parent: {
    top: 79,
    height: 78,
    left: 21,
  },
  backgroundParent: {
    top: 442,
    left: 75,
  },
  nextPayment: {
    top: 708,
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  groupView: {
    top: 700,
    left: 253,
    position: "absolute",
  },
  potentialVariation: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
  },
});

export default PotentialVariation;
