import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CreditOriginal11 = () => {
  return (
    <View style={styles.creditOriginal}>
      <View style={styles.eaInputBox} />
      <View style={[styles.creditOriginalChild, styles.navbarLayout1]} />
      <Text style={[styles.availableToEarn, styles.eyeParentLayout]}>
        Available to earn interest
      </Text>
      <View style={[styles.eaInputBoxParent, styles.parentLayout1]}>
        <View style={styles.eaInputBox1} />
        <Text style={[styles.supply, styles.supplyLayout]}>Supply</Text>
        <Image
          style={[styles.downloadIcon, styles.downloadIconPosition]}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
      </View>
      <View style={[styles.eaInputBoxGroup, styles.parentLayout1]}>
        <View style={styles.eaInputBox1} />
        <Image
          style={[styles.downloadIcon1, styles.downloadIconPosition]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
        <Text style={[styles.borrow, styles.homePosition]}>Borrow</Text>
      </View>
      <View style={[styles.navbar, styles.navbarLayout]}>
        <Image
          style={[styles.yxldhnzg400x400RemovebgPrevIcon, styles.navbarLayout]}
          contentFit="cover"
          source={require("../assets/yxldhnzg-400x400removebgpreview-91.png")}
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
        <View style={styles.navbarChild} />
        <View style={styles.navbarItem} />
      </View>
      <Text style={[styles.positions, styles.creditClr]}>Positions</Text>
      <Image
        style={[styles.image3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-31.png")}
      />
      <View style={[styles.homeRow, styles.homeLayout]}>
        <Image
          style={[styles.homeRowChild, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-3901.png")}
        />
        <View style={[styles.exchangeParent, styles.parentPosition]}>
          <Text style={[styles.exchange, styles.farmsTypo]}>Exchange</Text>
          <Image
            style={[styles.refresh2Icon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/refresh-21.png")}
          />
        </View>
        <View style={styles.groupFillParent}>
          <Image
            style={[styles.groupFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/group-fill.png")}
          />
          <Text style={[styles.business, styles.supplyTypo]}>Business</Text>
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.exchange, styles.farmsTypo]}>Account</Text>
          <Image
            style={[styles.userFillIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
      </View>
      <View style={[styles.eyeParent, styles.parentLayout1]}>
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>$23,000.06</Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-114.png")}
        />
        <Text style={[styles.creditBalance, styles.creditClr]}>
          Credit Balance
        </Text>
      </View>
      <View style={[styles.eaInputBoxContainer, styles.frameViewShadowBox]}>
        <View style={styles.eaInputBox1} />
        <Text style={[styles.deposit, styles.borrowPosition]}>Deposit</Text>
        <Image
          style={[styles.downloadIcon2, styles.downloadIconPosition]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameViewShadowBox]}>
        <View style={styles.eaInputBox1} />
        <Text style={[styles.transfer, styles.homePosition]}>Transfer</Text>
        <Image
          style={styles.twoWayArrowIcon}
          contentFit="cover"
          source={require("../assets/twoway-arrow.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View style={[styles.listboxbgParent, styles.parentLayout]}>
          <View style={styles.listboxbgPosition} />
          <View style={styles.placeholderText}>
            <Text style={[styles.selectAsset, styles.text1Typo]}>
              Select Asset
            </Text>
          </View>
          <Image
            style={[styles.chevronIcon, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/chevron11.png")}
          />
        </View>
        <View style={[styles.listboxMain, styles.listboxMainPosition]}>
          <View style={styles.listboxbgPosition} />
          <Text style={[styles.text1, styles.textFlexBox]}>$ 0.00</Text>
        </View>
      </View>
      <View style={styles.creditParent}>
        <Text style={[styles.credit, styles.creditClr]}>Credit</Text>
        <Text style={[styles.seeTransactions, styles.creditClr]}>
          See Transactions
        </Text>
      </View>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <View style={[styles.listboxbgGroup, styles.listboxMainPosition]}>
          <View style={[styles.listboxbg2, styles.listboxbgShadowBox]} />
          <View style={[styles.ethParent, styles.suppliedPosition]}>
            <Text style={[styles.eth, styles.ethTypo]}>ETH</Text>
            <Text style={[styles.text2, styles.ethTypo]}>4.20%</Text>
            <Text style={[styles.text3, styles.textFlexBox]}>03/04/2024</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>$ 6900.69</Text>
          </View>
        </View>
        <Text style={[styles.supplied, styles.suppliedPosition]}>Supplied</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <View style={[styles.listboxbgGroup, styles.listboxMainPosition]}>
          <View style={[styles.listboxbg3, styles.listboxbgShadowBox]} />
          <View style={[styles.ethParent, styles.suppliedPosition]}>
            <Text style={[styles.eth, styles.ethTypo]}>USDC</Text>
            <Text style={[styles.text2, styles.ethTypo]}>-6.90%</Text>
            <Text style={[styles.text3, styles.textFlexBox]}>03/04/2024</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>$ 1900.42</Text>
          </View>
        </View>
        <Text style={[styles.supplied, styles.suppliedPosition]}>Borrowed</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarLayout1: {
    width: 390,
    left: 0,
  },
  eyeParentLayout: {
    width: 201,
    left: 25,
  },
  parentLayout1: {
    height: 58,
    position: "absolute",
  },
  supplyLayout: {
    width: 53,
    color: Color.colorRoyalblue_100,
    left: "50%",
    height: 17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  downloadIconPosition: {
    height: 22,
    width: 25,
    top: 7,
    left: "50%",
    position: "absolute",
  },
  homePosition: {
    top: 35,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  navbarLayout: {
    height: 62,
    position: "absolute",
  },
  iconPosition: {
    height: 44,
    top: 9,
    position: "absolute",
  },
  creditClr: {
    color: Color.colorDimgray_300,
    textAlign: "left",
  },
  iconLayout: {
    height: 33,
    position: "absolute",
  },
  homeLayout: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  fillIconLayout: {
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
    borderColor: Color.colorDarkslateblue_100,
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
    borderColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_12xs,
    width: "30.86%",
    height: "30.86%",
    borderStyle: "solid",
    position: "absolute",
  },
  farmsTypo: {
    top: 33,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  supplyTypo: {
    textAlign: "center",
    top: 34,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupChildLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  frameViewShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 208,
    height: 58,
    position: "absolute",
  },
  borrowPosition: {
    marginLeft: -26,
    height: 17,
    width: 53,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "50%",
  },
  parentLayout: {
    height: 60,
    position: "absolute",
  },
  text1Typo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  listboxMainPosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "right",
    position: "absolute",
  },
  groupPosition: {
    left: "7.18%",
    right: "7.18%",
    width: "85.64%",
    height: "8.41%",
    position: "absolute",
  },
  listboxbgShadowBox: {
    elevation: 15,
    shadowRadius: 15,
    borderRadius: Border.br_5xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  suppliedPosition: {
    left: 13,
    position: "absolute",
  },
  ethTypo: {
    width: 61,
    color: Color.colorDimgray_600,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  eaInputBox: {
    top: 431,
    left: 63,
    borderColor: Color.colorDarkgray_600,
    borderWidth: 1,
    width: 161,
    height: 93,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  creditOriginalChild: {
    top: 0,
    backgroundColor: Color.colorWhite,
    width: 390,
    position: "absolute",
    height: 844,
  },
  availableToEarn: {
    top: 167,
    color: Color.colorDimgray_400,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  eaInputBox1: {
    backgroundColor: Color.colorGhostwhite,
    left: "0%",
    right: "0%",
    height: 58,
    top: 0,
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: "100%",
  },
  supply: {
    marginLeft: -28.5,
    height: 17,
    textAlign: "center",
    top: 34,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  downloadIcon: {
    marginLeft: -14.5,
  },
  eaInputBoxParent: {
    width: "51.54%",
    right: "42.82%",
    left: "5.64%",
    top: 406,
    height: 58,
  },
  downloadIcon1: {
    marginLeft: -13,
  },
  borrow: {
    marginLeft: -26,
    height: 17,
    width: 53,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "50%",
  },
  eaInputBoxGroup: {
    width: "34.87%",
    left: "58.97%",
    right: "6.15%",
    top: 406,
    height: 58,
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
  navbarChild: {
    width: 36,
    height: 47,
  },
  navbarItem: {
    width: 38,
    height: 43,
  },
  navbar: {
    top: 31,
    width: 390,
    left: 0,
  },
  positions: {
    top: 490,
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
    left: 25,
  },
  image3Icon: {
    top: 130,
    left: 22,
    width: 32,
  },
  homeRowChild: {
    top: 0,
  },
  exchange: {
    color: Color.colorDimgray_600,
  },
  refresh2Icon: {
    left: 10,
  },
  exchangeParent: {
    left: 168,
    width: 55,
  },
  groupFillIcon: {
    left: 8,
  },
  business: {
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
  },
  groupFillParent: {
    top: 20,
    left: 246,
    width: 50,
    height: 49,
    position: "absolute",
  },
  userFillIcon: {
    left: 6,
    width: 35,
    top: 0,
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
    left: 100,
    width: 13,
    height: 13,
    position: "absolute",
  },
  text: {
    top: 24,
    left: 29,
    fontSize: FontSize.size_9xl,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
  },
  groupChild: {
    height: "27.59%",
    width: "2.99%",
    top: "56.9%",
    bottom: "15.52%",
    left: "97.01%",
    right: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  creditBalance: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
  },
  eyeParent: {
    top: 106,
    width: 201,
    left: 25,
  },
  deposit: {
    textAlign: "center",
    top: 34,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  downloadIcon2: {
    marginLeft: -12,
  },
  eaInputBoxContainer: {
    width: "42.05%",
    right: "51.54%",
    left: "6.41%",
  },
  transfer: {
    marginLeft: -26.5,
    height: 17,
    width: 53,
    color: Color.colorRoyalblue_100,
    left: "50%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  twoWayArrowIcon: {
    marginLeft: -10.5,
    top: 11,
    height: 18,
    width: 25,
    left: "50%",
    position: "absolute",
  },
  frameView: {
    width: "42.82%",
    left: "51.03%",
    right: "6.15%",
  },
  listboxbgPosition: {
    borderRadius: Border.br_5xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGhostwhite,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  selectAsset: {
    top: "0%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  placeholderText: {
    height: "33.33%",
    width: "65.72%",
    right: "28.56%",
    bottom: "33.33%",
    left: "5.72%",
    top: "33.33%",
    position: "absolute",
  },
  chevronIcon: {
    height: "8.33%",
    width: "6.92%",
    top: "46.67%",
    right: "10.9%",
    bottom: "45%",
    left: "82.19%",
  },
  listboxbgParent: {
    width: "58.43%",
    right: "41.57%",
    left: "0%",
    top: 0,
  },
  text1: {
    width: "83.82%",
    left: "11.03%",
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    top: "33.33%",
  },
  listboxMain: {
    width: "39.53%",
    left: "60.47%",
  },
  frameParent: {
    width: "88.21%",
    top: 330,
    right: "6.15%",
    left: "5.64%",
  },
  credit: {
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
    left: "0%",
    top: 0,
  },
  seeTransactions: {
    top: 10,
    left: "64.46%",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  creditParent: {
    width: "85.13%",
    top: 291,
    right: "8.72%",
    left: "6.15%",
    height: 27,
    position: "absolute",
  },
  listboxbg2: {
    backgroundColor: Color.colorPaleturquoise,
  },
  eth: {
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  text2: {
    top: 4,
    left: 51,
    fontSize: FontSize.size_3xs,
  },
  text3: {
    left: 136,
    width: 83,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 0,
  },
  text4: {
    left: 219,
    width: 81,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 0,
  },
  ethParent: {
    top: 36,
    width: 300,
    height: 17,
  },
  listboxbgGroup: {
    left: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
  },
  supplied: {
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_300,
    textAlign: "left",
    top: 7,
    left: 13,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupParent: {
    top: "61.97%",
    bottom: "29.62%",
  },
  listboxbg3: {
    backgroundColor: Color.colorPink,
  },
  groupContainer: {
    top: "73.93%",
    bottom: "17.65%",
  },
  creditOriginal: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default CreditOriginal11;
