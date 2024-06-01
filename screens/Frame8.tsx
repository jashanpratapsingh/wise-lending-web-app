import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Frame8 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.img4427Parent, styles.img4427Layout]}>
        <Image
          style={[styles.img4427Icon, styles.img4427Layout]}
          contentFit="cover"
          source={require("../assets/img-4427.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.wiseToken, styles.wiseTokenTypo]}>
            WISE Token
          </Text>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.yxldhnzg400x400RemovebgPrevIcon}
            contentFit="cover"
            source={require("../assets/yxldhnzg-400x400removebgpreview-7.png")}
          />
          <Text style={[styles.wise, styles.wiseTypo]}>WISE</Text>
        </View>
      </View>
      <Image
        style={[styles.image17Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <View style={[styles.eaInputBoxParent, styles.parentLayout]}>
        <View style={[styles.eaInputBox, styles.inputPosition]} />
        <Text style={[styles.supply, styles.borrowTypo]}>Supply</Text>
        <Image
          style={[styles.downloadIcon, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
      </View>
      <View style={[styles.eaInputBoxGroup, styles.inputLayout1]}>
        <View style={[styles.eaInputBox1, styles.inputLayout1]} />
        <Image
          style={[styles.downloadIcon1, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
        <Text style={[styles.borrow, styles.borrowTypo]}>Borrow</Text>
      </View>
      <View
        style={[
          styles.yxldhnzg400x400RemovebgPrevParent,
          styles.yxldhnzg400x400Layout,
        ]}
      >
        <Image
          style={[
            styles.yxldhnzg400x400RemovebgPrevIcon1,
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
      <Text style={[styles.save, styles.wiseTypo]}>Save</Text>
      <View style={[styles.homeRow, styles.homeLayout]}>
        <Image
          style={[styles.homeRowChild, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-390.png")}
        />
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
            style={[styles.refresh2Icon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/refresh-21.png")}
          />
        </View>
        <View style={styles.groupFillParent}>
          <Image
            style={[styles.groupFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/group-fill1.png")}
          />
          <Text style={[styles.business, styles.homeTypo]}>Business</Text>
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
      <View style={styles.listboxbgParent}>
        <View style={styles.listboxbgShadowBox} />
        <View style={styles.placeholderText}>
          <Text style={[styles.selectAsset, styles.textTypo]}>
            Select Asset
          </Text>
        </View>
        <Image
          style={[styles.chevronIcon, styles.groupInnerLayout]}
          contentFit="cover"
          source={require("../assets/chevron1.png")}
        />
      </View>
      <View style={[styles.eaInputBoxContainer, styles.inputLayout]}>
        <View style={[styles.eaInputBox2, styles.inputLayout]} />
        <Text style={[styles.topUp, styles.borrowTypo]}>Top Up</Text>
        <Image
          style={[styles.downloadIcon2, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]}>
        <View style={[styles.eaInputBox3, styles.frameViewLayout]} />
        <Text style={[styles.borrow1, styles.borrowTypo]}>Borrow</Text>
        <Image
          style={[styles.lightningRingLightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/lightning-ring-light.png")}
        />
      </View>
      <View style={styles.listboxMain}>
        <View style={styles.listboxbgShadowBox} />
        <Text style={[styles.text, styles.textTypo]}>$ 0.00</Text>
      </View>
      <View style={[styles.eaInputBoxParent, styles.parentLayout]}>
        <View style={[styles.eaInputBox, styles.inputPosition]} />
        <Text style={[styles.supply, styles.borrowTypo]}>Supply</Text>
        <Image
          style={[styles.downloadIcon, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
      </View>
      <View style={[styles.eaInputBoxGroup, styles.inputLayout1]}>
        <View style={[styles.eaInputBox1, styles.inputLayout1]} />
        <Image
          style={[styles.downloadIcon1, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
        <Text style={[styles.borrow, styles.borrowTypo]}>Borrow</Text>
      </View>
      <View style={styles.listboxMain}>
        <View style={styles.listboxbgShadowBox} />
        <Text style={[styles.text, styles.textTypo]}>$ 0.00</Text>
      </View>
      <Text style={[styles.interestEarned, styles.eyeParentPosition]}>
        Interest Earned
      </Text>
      <View style={[styles.eyeParent, styles.eyeParentPosition]}>
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.text2, styles.wiseTypo]}>$11,524.06</Text>
        <Image
          style={[styles.groupInner, styles.groupInnerLayout]}
          contentFit="cover"
          source={require("../assets/vector-112.png")}
        />
        <Text style={[styles.savingsHub, styles.savingsHubTypo]}>
          Savings Hub
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    width: 390,
    left: 0,
  },
  img4427Layout: {
    width: 353,
    position: "absolute",
  },
  groupLayout: {
    height: 39,
    position: "absolute",
  },
  wiseTokenTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  wiseTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    position: "absolute",
  },
  parentLayout: {
    height: 58,
    width: 201,
  },
  inputPosition: {
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  borrowTypo: {
    height: 17,
    width: 53,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  downloadIconLayout: {
    height: 22,
    width: 25,
    top: 7,
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
  homeLayout: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  homeTypo: {
    color: Color.colorDimgray_600,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
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
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupInnerLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
  eyeParentPosition: {
    left: 26,
    position: "absolute",
  },
  savingsHubTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  frameChild: {
    backgroundColor: Color.colorWhite,
    top: 0,
    position: "absolute",
    height: 844,
  },
  img4427Icon: {
    height: 250,
    left: 0,
    top: 0,
  },
  groupChild: {
    left: 39,
    width: 131,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  wiseToken: {
    top: 22,
    textAlign: "left",
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_sm,
    left: 40,
    position: "absolute",
  },
  groupItem: {
    width: 32,
    height: 32,
    top: 5,
    left: 0,
    position: "absolute",
  },
  yxldhnzg400x400RemovebgPrevIcon: {
    top: 8,
    left: 2,
    width: 28,
    height: 25,
    position: "absolute",
  },
  wise: {
    top: 4,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 40,
  },
  rectangleGroup: {
    top: 162,
    left: 27,
    width: 170,
  },
  img4427Parent: {
    top: 506,
    left: 19,
    height: 270,
  },
  image17Icon: {
    top: 131,
    width: 29,
    left: 24,
  },
  eaInputBox: {
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
    height: 58,
    top: 406,
    position: "absolute",
  },
  eaInputBox1: {
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
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
    width: 136,
  },
  yxldhnzg400x400RemovebgPrevIcon1: {
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
  save: {
    top: 291,
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_500,
    left: 24,
    textAlign: "left",
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
    left: 24,
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
    height: 33,
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
    right: "0%",
    top: "0%",
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
    width: 201,
    left: 22,
    position: "absolute",
  },
  eaInputBox2: {
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  topUp: {
    left: 56,
    top: 34,
  },
  downloadIcon2: {
    left: 70,
  },
  eaInputBoxContainer: {
    left: 25,
    top: 208,
  },
  eaInputBox3: {
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  borrow1: {
    left: 57,
    top: 35,
  },
  lightningRingLightIcon: {
    left: 68,
    width: 30,
    top: 5,
  },
  frameView: {
    left: 199,
    top: 208,
  },
  text: {
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
  interestEarned: {
    top: 166,
    color: Color.colorDimgray_400,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  eyeIcon: {
    top: 1,
    left: 82,
    width: 13,
    height: 13,
    position: "absolute",
  },
  text2: {
    top: 24,
    left: 29,
    fontSize: FontSize.size_9xl,
    color: Color.colorSeagreen,
    textAlign: "left",
  },
  groupInner: {
    height: "27.59%",
    width: "2.99%",
    top: "56.9%",
    bottom: "15.52%",
    left: "97.01%",
    right: "0%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  savingsHub: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
    color: Color.colorDimgray_300,
    left: 0,
    top: 0,
  },
  eyeParent: {
    top: 105,
    height: 58,
    width: 201,
  },
  rectangleParent: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Frame8;
