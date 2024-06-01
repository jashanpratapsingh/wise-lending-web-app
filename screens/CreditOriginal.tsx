import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CreditOriginal = () => {
  return (
    <View style={styles.creditOriginal}>
      <View style={styles.eaInputBox} />
      <View
        style={[styles.creditOriginalChild, styles.creditOriginalChildLayout]}
      />
      <Text style={[styles.availableToEarn, styles.availableToEarnLayout]}>
        Available to earn interest
      </Text>
      <View style={[styles.eaInputBoxParent, styles.parentLayout]}>
        <View style={[styles.eaInputBox1, styles.inputPosition]} />
        <Text style={[styles.supply, styles.supplyTypo]}>Supply</Text>
        <Image
          style={[styles.downloadIcon, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
      </View>
      <View style={[styles.eaInputBoxGroup, styles.inputLayout1]}>
        <View style={[styles.eaInputBox2, styles.inputLayout1]} />
        <Image
          style={[styles.downloadIcon1, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
        <Text style={[styles.borrow, styles.supplyTypo]}>Borrow</Text>
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
      <Text style={[styles.credit, styles.creditPosition]}>Credit</Text>
      <Image
        style={[styles.image3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-31.png")}
      />
      <View style={[styles.homeRow, styles.homeLayout]}>
        <Image
          style={[styles.homeRowChild, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-390.png")}
        />
        <View style={[styles.homeParent, styles.creditPosition]}>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Image
            style={[styles.homeFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/home-fill1.png")}
          />
        </View>
        <View style={[styles.darhboardParent, styles.parentPosition]}>
          <View style={[styles.homeFillIcon, styles.fillIconLayout]}>
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
          <Text style={[styles.business, styles.homeTypo]}>Business</Text>
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeTypo]}>Account</Text>
          <Image
            style={[styles.userFillIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
      </View>
      <View style={[styles.eyeParent, styles.parentLayout]}>
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.text, styles.creditTypo]}>$23,000.06</Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-111.png")}
        />
        <Text style={[styles.creditBalance, styles.creditTypo]}>
          Credit Balance
        </Text>
      </View>
      <View style={[styles.listboxbgParent, styles.availableToEarnLayout]}>
        <View style={styles.listboxbgShadowBox} />
        <View style={styles.placeholderText}>
          <Text style={[styles.selectAsset, styles.text1Typo]}>
            Select Asset
          </Text>
        </View>
        <Image
          style={[styles.chevronIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/chevron1.png")}
        />
      </View>
      <View style={[styles.eaInputBoxContainer, styles.inputLayout]}>
        <View style={[styles.eaInputBox3, styles.inputLayout]} />
        <Text style={[styles.deposit, styles.supplyTypo]}>Deposit</Text>
        <Image
          style={[styles.downloadIcon2, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]}>
        <View style={[styles.eaInputBox4, styles.frameViewLayout]} />
        <Text style={[styles.transfer, styles.supplyTypo]}>Transfer</Text>
        <Image
          style={styles.twoWayArrowIcon}
          contentFit="cover"
          source={require("../assets/twoway-arrow.png")}
        />
      </View>
      <View style={styles.listboxMain}>
        <View style={styles.listboxbgShadowBox} />
        <Text style={[styles.text1, styles.text1Typo]}>$ 0.00</Text>
      </View>
      <View style={[styles.eaInputBoxParent, styles.parentLayout]}>
        <View style={[styles.eaInputBox1, styles.inputPosition]} />
        <Text style={[styles.supply, styles.supplyTypo]}>Supply</Text>
        <Image
          style={[styles.downloadIcon, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
      </View>
      <View style={[styles.eaInputBoxGroup, styles.inputLayout1]}>
        <View style={[styles.eaInputBox2, styles.inputLayout1]} />
        <Image
          style={[styles.downloadIcon1, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
        <Text style={[styles.borrow, styles.supplyTypo]}>Borrow</Text>
      </View>
      <View style={styles.listboxMain}>
        <View style={styles.listboxbgShadowBox} />
        <Text style={[styles.text1, styles.text1Typo]}>$ 0.00</Text>
      </View>
      <View style={[styles.img4427Parent, styles.img4427Layout]}>
        <Image
          style={[styles.img4427Icon, styles.img4427Layout]}
          contentFit="cover"
          source={require("../assets/img-4427.png")}
        />
        <View style={[styles.rectangleParent, styles.groupItemLayout]}>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <Text style={[styles.wiseToken, styles.wiseTypo]}>WISE Token</Text>
          <Image
            style={styles.groupInner}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.yxldhnzg400x400RemovebgPrevIcon1}
            contentFit="cover"
            source={require("../assets/yxldhnzg-400x400removebgpreview-7.png")}
          />
          <Text style={[styles.wise, styles.wiseTypo]}>WISE</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  creditOriginalChildLayout: {
    width: 390,
    left: 0,
  },
  availableToEarnLayout: {
    width: 201,
    position: "absolute",
  },
  parentLayout: {
    height: 58,
    width: 201,
    position: "absolute",
  },
  inputPosition: {
    backgroundColor: Color.colorGhostwhite,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
  },
  supplyTypo: {
    height: 17,
    width: 53,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  downloadIconLayout: {
    height: 22,
    top: 7,
    width: 25,
    position: "absolute",
  },
  inputLayout1: {
    width: 136,
    height: 58,
    position: "absolute",
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
  creditPosition: {
    left: 24,
    position: "absolute",
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
  homeTypo: {
    color: Color.colorDimgray_600,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
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
  creditTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupChildLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  text1Typo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  inputLayout: {
    width: 164,
    height: 58,
    position: "absolute",
  },
  frameViewLayout: {
    width: 167,
    height: 58,
    position: "absolute",
  },
  img4427Layout: {
    width: 353,
    position: "absolute",
  },
  groupItemLayout: {
    height: 39,
    position: "absolute",
  },
  wiseTypo: {
    fontSize: FontSize.size_sm,
    left: 40,
    textAlign: "left",
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
    left: 25,
  },
  eaInputBox1: {
    height: 58,
    width: 201,
    position: "absolute",
  },
  supply: {
    left: 72,
    top: 34,
  },
  downloadIcon: {
    left: 86,
  },
  eaInputBoxParent: {
    left: 22,
    top: 406,
  },
  eaInputBox2: {
    backgroundColor: Color.colorGhostwhite,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
  },
  downloadIcon1: {
    left: 55,
  },
  borrow: {
    left: 42,
    top: 35,
  },
  eaInputBoxGroup: {
    left: 230,
    top: 406,
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
    top: 31,
    width: 390,
    left: 0,
  },
  credit: {
    top: 291,
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  image3Icon: {
    top: 130,
    width: 32,
    left: 22,
  },
  homeRowChild: {
    top: 0,
  },
  home: {
    top: 35,
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
    top: 33,
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
  groupFillIcon: {
    left: 8,
  },
  business: {
    top: 34,
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
    color: Color.colorDodgerblue_100,
    textAlign: "left",
    position: "absolute",
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
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  eyeParent: {
    top: 106,
    left: 25,
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
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    backgroundColor: Color.colorGhostwhite,
    position: "absolute",
    width: "100%",
  },
  selectAsset: {
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
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
    opacity: 0.8,
  },
  listboxbgParent: {
    top: 330,
    height: 60,
    left: 22,
  },
  eaInputBox3: {
    backgroundColor: Color.colorGhostwhite,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
  },
  deposit: {
    left: 56,
    top: 34,
  },
  downloadIcon2: {
    left: 70,
  },
  eaInputBoxContainer: {
    top: 208,
    left: 25,
  },
  eaInputBox4: {
    backgroundColor: Color.colorGhostwhite,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
  },
  transfer: {
    left: 57,
    top: 35,
  },
  twoWayArrowIcon: {
    top: 11,
    left: 73,
    height: 18,
    width: 25,
    position: "absolute",
  },
  frameView: {
    left: 199,
    top: 208,
  },
  text1: {
    width: "83.82%",
    left: "11.03%",
    textAlign: "right",
    top: "33.33%",
  },
  listboxMain: {
    height: "7.11%",
    width: "34.87%",
    top: "39.1%",
    right: "6.15%",
    bottom: "53.79%",
    left: "58.97%",
    position: "absolute",
  },
  img4427Icon: {
    height: 250,
    left: 0,
    top: 0,
  },
  groupItem: {
    left: 39,
    width: 131,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  wiseToken: {
    top: 22,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  groupInner: {
    top: 5,
    height: 32,
    width: 32,
    left: 0,
    position: "absolute",
  },
  yxldhnzg400x400RemovebgPrevIcon1: {
    top: 8,
    left: 2,
    width: 28,
    height: 25,
    position: "absolute",
  },
  wise: {
    top: 4,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  rectangleParent: {
    top: 162,
    left: 27,
    width: 170,
  },
  img4427Parent: {
    top: 506,
    left: 19,
    height: 270,
  },
  creditOriginal: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default CreditOriginal;
