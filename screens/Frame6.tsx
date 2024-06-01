import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Frame6 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <Image
          style={[styles.frameInner, styles.eyeIconPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Text style={[styles.forPayees, styles.businessFlexBox]}>
          For Payees
        </Text>
        <Text style={[styles.forPayers, styles.businessFlexBox]}>
          For Payers
        </Text>
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
        <View style={styles.groupFillParent}>
          <Image
            style={[styles.groupFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/group-fill2.png")}
          />
          <Text style={[styles.business, styles.businessFlexBox]}>
            Business
          </Text>
        </View>
        <View style={styles.homeParent}>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Image
            style={[styles.homeFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/home-fill.png")}
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
            style={[styles.groupFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/refresh-21.png")}
          />
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeTypo]}>Account</Text>
          <Image
            style={[styles.userFillIcon, styles.frameItemLayout]}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
      </View>
      <View style={[styles.listboxbgParent, styles.rectangleGroupPosition]}>
        <View style={[styles.listboxbg, styles.listboxbgPosition]} />
        <View style={styles.frameParent}>
          <View style={[styles.eaInputBoxParent, styles.inputLayout1]}>
            <View style={[styles.eaInputBox, styles.inputLayout1]} />
            <Text style={[styles.enterBusinessName, styles.homeTypo]}>
              Enter business name
            </Text>
          </View>
          <View style={[styles.eaInputBoxGroup, styles.inputSpaceBlock]}>
            <View style={[styles.eaInputBox, styles.inputLayout1]} />
            <Text style={[styles.enterBusinessName, styles.homeTypo]}>
              Enter a claim amount
            </Text>
          </View>
          <View style={[styles.eaInputBoxContainer, styles.inputSpaceBlock]}>
            <Image
              style={[styles.eaInputBox2, styles.inputLayout]}
              contentFit="cover"
              source={require("../assets/ea-input-box2.png")}
            />
            <Text style={[styles.claim, styles.claimLayout]}>Claim</Text>
          </View>
        </View>
      </View>
      <View style={styles.eyeParent}>
        <Image
          style={[styles.eyeIcon, styles.eyeIconPosition]}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>$21,524.12</Text>
        <Image
          style={[styles.groupChild, styles.listboxbgPosition]}
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
      <Image
        style={[styles.eaInputBox3, styles.inputLayout]}
        contentFit="cover"
        source={require("../assets/ea-input-box3.png")}
      />
      <Text style={[styles.goBack, styles.claimLayout]}>Go Back</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleGroupPosition: {
    width: 300,
    left: 48,
    position: "absolute",
  },
  frameItemLayout: {
    height: 33,
    position: "absolute",
  },
  eyeIconPosition: {
    top: 1,
    position: "absolute",
  },
  businessFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  yxldhnzg400x400Layout: {
    height: 62,
    position: "absolute",
  },
  iconPosition: {
    top: 9,
    height: 44,
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
  homeTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDimgray_600,
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
  listboxbgPosition: {
    right: "0%",
    position: "absolute",
  },
  inputLayout1: {
    width: 257,
    height: 40,
  },
  inputSpaceBlock: {
    marginTop: 31,
    width: 257,
  },
  inputLayout: {
    borderRadius: Border.br_8xs,
    width: 257,
    height: 44,
    position: "absolute",
  },
  claimLayout: {
    height: 18,
    width: 89,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frameChild: {
    width: 390,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  frameItem: {
    top: -1,
    left: -1,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorDarkgray_500,
    width: 302,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
  },
  frameInner: {
    left: 149,
    width: 150,
    height: 29,
    borderRadius: Border.br_81xl,
  },
  forPayees: {
    left: 187,
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 7,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  forPayers: {
    left: 40,
    color: Color.colorDarkgray_400,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 7,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  rectangleGroup: {
    top: 225,
    height: 31,
  },
  yxldhnzg400x400RemovebgPrevIcon: {
    left: 165,
    width: 58,
    top: 0,
  },
  image1Icon: {
    width: 48,
    height: 44,
    left: 0,
  },
  image2Icon: {
    left: 291,
    width: 99,
    height: 44,
  },
  yxldhnzg400x400RemovebgPrevParent: {
    top: 33,
    left: 0,
    width: 390,
  },
  homeRowChild: {
    top: 0,
  },
  groupFillIcon: {
    left: 10,
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
  home: {
    top: 35,
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
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
  exchangeParent: {
    left: 168,
    width: 55,
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
  listboxbg: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
  eaInputBox: {
    borderRadius: Border.br_10xs,
    borderColor: Color.colorDarkgray_100,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  enterBusinessName: {
    top: 12,
    left: 49,
    width: 158,
    color: Color.colorDimgray_600,
    textAlign: "center",
    position: "absolute",
    fontSize: FontSize.size_sm,
    fontWeight: "300",
  },
  eaInputBoxParent: {
    height: 40,
  },
  eaInputBoxGroup: {
    height: 40,
  },
  eaInputBox2: {
    left: 0,
    top: 0,
  },
  claim: {
    top: 13,
    left: 84,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
  eaInputBoxContainer: {
    height: 44,
  },
  frameParent: {
    top: 30,
    left: 19,
    position: "absolute",
  },
  listboxbgParent: {
    top: 320,
    height: 246,
  },
  eyeIcon: {
    left: 115,
    width: 13,
    height: 13,
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
    bottom: "44.32%",
    left: "96.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  eaInputBox3: {
    top: 608,
    left: 67,
  },
  goBack: {
    top: 621,
    left: 150,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  rectangleParent: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Frame6;
