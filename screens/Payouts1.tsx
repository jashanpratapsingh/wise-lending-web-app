import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Payouts1 = () => {
  return (
    <View style={styles.payouts}>
      <View style={[styles.payoutsChild, styles.payoutsChildLayout]} />
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
          <Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
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
          <Text style={[styles.farms, styles.homeFlexBox]}>Farms</Text>
        </View>
        <View style={[styles.exchangeParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeFlexBox]}>Exchange</Text>
          <Image
            style={[styles.refresh2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/refresh-21.png")}
          />
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeFlexBox]}>Account</Text>
          <Image
            style={styles.userFillIcon}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
        <View style={styles.groupFillParent}>
          <Image
            style={[styles.refresh2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-fill3.png")}
          />
          <Text style={[styles.business, styles.homeFlexBox]}>Business</Text>
        </View>
      </View>
      <View style={styles.eyeParent}>
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>$21,524.12</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Text style={[styles.businessBalance, styles.textTypo]}>
          Business Balance
        </Text>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textTypo]}>5.63%</Text>
          <Text style={[styles.h, styles.textTypo]}>24H</Text>
          <Image
            style={styles.arrowDropUpIcon}
            contentFit="cover"
            source={require("../assets/arrow-drop-up1.png")}
          />
        </View>
      </View>
      <View style={[styles.listboxbg, styles.listboxbgBg]} />
      <View style={[styles.eaInputBoxParent, styles.inputLayout]}>
        <Image
          style={[styles.eaInputBox, styles.inputLayout]}
          contentFit="cover"
          source={require("../assets/ea-input-box2.png")}
        />
        <Text style={[styles.submit, styles.homeFlexBox]}>Submit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  payoutsChildLayout: {
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
  homeFlexBox: {
    textAlign: "center",
    position: "absolute",
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
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  listboxbgBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  inputLayout: {
    width: 257,
    height: 44,
    position: "absolute",
  },
  payoutsChild: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
    top: 0,
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
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    left: 0,
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
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    left: 0,
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
  business: {
    top: 34,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  groupFillParent: {
    top: 20,
    left: 244,
    width: 54,
    height: 49,
    position: "absolute",
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
    fontSize: FontSize.size_9xl,
    color: Color.colorGray_400,
    left: 6,
  },
  groupChild: {
    height: "18.18%",
    width: "3.37%",
    top: "37.5%",
    right: "0%",
    bottom: "44.32%",
    left: "96.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  businessBalance: {
    left: 7,
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  text1: {
    left: 21,
    color: Color.colorSeagreen,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  h: {
    left: 57,
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
  listboxbg: {
    height: "51.07%",
    width: "85.64%",
    top: "26.66%",
    right: "7.44%",
    bottom: "22.27%",
    left: "6.92%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
  },
  eaInputBox: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  submit: {
    top: 13,
    left: 84,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    width: 89,
    height: 18,
  },
  eaInputBoxParent: {
    top: 685,
    left: 65,
  },
  payouts: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Payouts1;
