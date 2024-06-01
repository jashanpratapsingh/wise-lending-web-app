import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame7 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.img4427Parent, styles.img4427Layout]}>
        <Image
          style={[styles.img4427Icon, styles.img4427Layout]}
          contentFit="cover"
          source={require("../assets/img-4427.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={styles.wiseToken}>WISE Token</Text>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.yxldhnzg400x400RemovebgPrevIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/yxldhnzg-400x400removebgpreview-7.png")}
          />
          <Text style={styles.wise}>WISE</Text>
        </View>
      </View>
      <View style={[styles.eaInputBoxParent, styles.parentLayout]}>
        <View style={[styles.eaInputBox, styles.inputPosition]} />
        <Text style={[styles.supply, styles.topUpTypo]}>Supply</Text>
        <Image
          style={[styles.downloadIcon, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
      </View>
      <View style={styles.eaInputBoxGroup}>
        <View style={[styles.eaInputBox1, styles.inputPosition]} />
        <Image
          style={[styles.downloadIcon1, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
        <Text style={[styles.borrow, styles.topUpTypo]}>Borrow</Text>
      </View>
      <Text style={[styles.interestEarned, styles.interestTypo]}>
        Interest Earned
      </Text>
      <View style={[styles.eaInputBoxContainer, styles.inputLayout]}>
        <View style={[styles.eaInputBox2, styles.inputLayout]} />
        <Text style={[styles.topUp, styles.topUpTypo]}>Top Up</Text>
        <Image
          style={[styles.downloadIcon2, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]}>
        <View style={[styles.eaInputBox3, styles.frameViewLayout]} />
        <Text style={[styles.exchange, styles.topUpTypo]}>Exchange</Text>
        <Image
          style={[styles.refresh2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/refresh-22.png")}
        />
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
      <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      <View style={styles.eaInputBoxParent1}>
        <View style={styles.eaInputBox4} />
        <Text style={[styles.interestEarned1, styles.interestTypo]}>
          Interest Earned
        </Text>
        <Text style={[styles.savingsHub, styles.saveTypo]}>Savings Hub</Text>
        <Text style={[styles.text, styles.textTypo2]}>$11,524.06</Text>
        <Image
          style={[styles.image3Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
      </View>
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
            style={[styles.refresh2Icon1, styles.fillIconLayout]}
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
      <View style={[styles.eyeParent, styles.parentLayout]}>
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.text1, styles.textTypo2]}>$11,524.06</Text>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/vector-112.png")}
        />
        <Text style={styles.savingsHub1}>Savings Hub</Text>
      </View>
      <View style={[styles.listboxMain, styles.listboxPosition]}>
        <View style={[styles.listboxbg, styles.listboxbgShadowBox]} />
        <View style={styles.placeholderText}>
          <Text style={[styles.selectAsset, styles.text2Typo]}>
            Select Asset
          </Text>
        </View>
        <Image
          style={[styles.chevronIcon, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/chevron2.png")}
        />
      </View>
      <View style={[styles.listboxMain1, styles.listboxPosition]}>
        <View style={[styles.listboxbg1, styles.listboxbgShadowBox]} />
        <Text style={[styles.text2, styles.text2Typo]}>$ 0.00</Text>
      </View>
      <View style={[styles.dropdownList, styles.listboxbgShadowBox]}>
        <View style={styles.item1}>
          <Text style={[styles.text3, styles.textTypo1]}>POOL</Text>
          <Text style={[styles.text4, styles.textPosition]}>SUPPLY</Text>
          <Text style={[styles.text5, styles.textTypo1]}>APY</Text>
        </View>
        <View style={styles.itemSpaceBlock}>
          <Text style={[styles.text6, styles.textTypo]}>ETH</Text>
          <Text style={[styles.text7, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text8, styles.textTypo]}>127.34%</Text>
        </View>
        <View style={[styles.item8, styles.itemSpaceBlock]}>
          <Text style={[styles.text6, styles.textTypo]}>USDC</Text>
          <Text style={[styles.text7, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text11, styles.textTypo]}>127.34%</Text>
        </View>
        <View style={styles.itemSpaceBlock}>
          <Text style={[styles.text6, styles.textTypo]}>USDT</Text>
          <Text style={[styles.text7, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text11, styles.textTypo]}>127.34%</Text>
        </View>
        <View style={styles.itemSpaceBlock}>
          <Text style={[styles.text6, styles.textTypo]}>DAI</Text>
          <Text style={[styles.text7, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text11, styles.textTypo]}>127.34%</Text>
        </View>
        <View style={[styles.item8, styles.itemSpaceBlock]}>
          <Text style={[styles.text6, styles.textTypo]}>SDAI</Text>
          <Text style={[styles.text7, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text11, styles.textTypo]}>127.34%</Text>
        </View>
        <View style={[styles.item8, styles.itemSpaceBlock]}>
          <Text style={[styles.text6, styles.textTypo]}>WBTC</Text>
          <Text style={[styles.text7, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text11, styles.textTypo]}>127.34%</Text>
        </View>
        <View style={[styles.item8, styles.itemSpaceBlock]}>
          <Text style={[styles.text6, styles.textTypo]}>wstETH</Text>
          <Text style={[styles.text7, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text11, styles.textTypo]}>127.34%</Text>
        </View>
      </View>
      <Image
        style={styles.image16Icon}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
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
  iconLayout1: {
    height: 25,
    top: 8,
  },
  parentLayout: {
    height: 58,
    position: "absolute",
  },
  inputPosition: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite,
    left: 0,
    top: 0,
  },
  topUpTypo: {
    height: 17,
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
  interestTypo: {
    color: Color.colorDimgray_400,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
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
  iconLayout: {
    width: 25,
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
  saveTypo: {
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  textTypo2: {
    color: Color.colorSeagreen,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  frameInnerLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  listboxPosition: {
    bottom: "53.79%",
    top: "39.1%",
    height: "7.11%",
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
    position: "absolute",
  },
  text2Typo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    top: 12,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textPosition: {
    left: 74,
    textAlign: "left",
  },
  textTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.montserratRegular,
    top: 12,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  itemSpaceBlock: {
    marginTop: 1,
    height: 40,
    alignSelf: "stretch",
    overflow: "hidden",
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
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 40,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupItem: {
    top: 5,
    width: 32,
    height: 32,
    left: 0,
    position: "absolute",
  },
  yxldhnzg400x400RemovebgPrevIcon: {
    left: 2,
    width: 28,
    position: "absolute",
  },
  wise: {
    top: 4,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 40,
    position: "absolute",
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
  eaInputBox: {
    backgroundColor: Color.colorGhostwhite,
    height: 58,
    position: "absolute",
    width: 199,
  },
  supply: {
    left: 72,
    width: 53,
    height: 17,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    top: 34,
  },
  downloadIcon: {
    left: 86,
  },
  eaInputBoxParent: {
    top: 405,
    width: 199,
    height: 58,
    left: 22,
  },
  eaInputBox1: {
    width: 136,
    backgroundColor: Color.colorGhostwhite,
    height: 58,
    position: "absolute",
  },
  downloadIcon1: {
    left: 55,
  },
  borrow: {
    left: 42,
    top: 35,
    width: 53,
    height: 17,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
  },
  eaInputBoxGroup: {
    left: 230,
    width: 134,
    top: 398,
    height: 58,
    position: "absolute",
  },
  interestEarned: {
    top: 167,
    left: 25,
  },
  eaInputBox2: {
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  topUp: {
    left: 56,
    width: 53,
    height: 17,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    top: 34,
  },
  downloadIcon2: {
    left: 70,
  },
  eaInputBoxContainer: {
    top: 208,
    left: 25,
  },
  eaInputBox3: {
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  exchange: {
    left: 51,
    width: 64,
    top: 35,
    height: 17,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
  },
  refresh2Icon: {
    left: 71,
    height: 25,
    top: 8,
  },
  frameView: {
    left: 199,
    top: 208,
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
    left: 24,
  },
  eaInputBox4: {
    top: -1,
    left: -1,
    borderColor: Color.colorDarkgray_600,
    borderWidth: 1,
    width: 161,
    height: 93,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  interestEarned1: {
    top: 66,
    left: 8,
  },
  savingsHub: {
    top: 11,
    left: 32,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_500,
  },
  text: {
    top: 36,
    fontSize: FontSize.size_lg,
    left: 8,
  },
  image3Icon: {
    left: 7,
    height: 26,
    top: 7,
    width: 25,
  },
  frameInner: {
    height: "10.99%",
    width: "2.52%",
    top: "16.48%",
    right: "10.69%",
    bottom: "72.53%",
    left: "86.79%",
  },
  eaInputBoxParent1: {
    top: 603,
    width: 159,
    height: 91,
    left: 24,
    position: "absolute",
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
  refresh2Icon1: {
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
  eyeIcon: {
    top: 1,
    left: 82,
    width: 13,
    height: 13,
    position: "absolute",
  },
  text1: {
    top: 24,
    left: 29,
    fontSize: FontSize.size_9xl,
  },
  groupInner: {
    height: "27.59%",
    width: "2.99%",
    top: "56.9%",
    bottom: "15.52%",
    left: "97.01%",
    right: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  savingsHub1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorDimgray_300,
    left: 0,
    top: 0,
    position: "absolute",
  },
  eyeParent: {
    top: 106,
    width: 201,
    left: 25,
  },
  listboxbg: {
    left: "0%",
    top: "0%",
    bottom: "0%",
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
    backgroundColor: Color.colorWhite,
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
    width: "65.71%",
    right: "28.59%",
    bottom: "33.33%",
    left: "5.71%",
    top: "33.33%",
    position: "absolute",
  },
  chevronIcon: {
    height: "8.33%",
    width: "6.92%",
    top: "46.67%",
    right: "10.86%",
    bottom: "45%",
    left: "82.22%",
    opacity: 0.8,
  },
  listboxMain: {
    width: "50.77%",
    right: "43.59%",
    left: "5.64%",
  },
  listboxbg1: {
    left: "0%",
    top: "0%",
    bottom: "0%",
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
    backgroundColor: Color.colorGhostwhite,
  },
  text2: {
    width: "83.82%",
    left: "11.03%",
    textAlign: "right",
    top: "33.33%",
  },
  listboxMain1: {
    width: "34.87%",
    right: "6.15%",
    left: "58.97%",
  },
  text3: {
    left: 12,
    textAlign: "left",
  },
  text4: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    top: 12,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  text5: {
    left: 155,
    textAlign: "right",
  },
  item1: {
    height: 40,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text6: {
    left: 12,
    textAlign: "left",
  },
  text7: {
    left: 74,
    textAlign: "left",
  },
  text8: {
    left: 134,
    textAlign: "right",
  },
  text11: {
    left: 133,
    textAlign: "right",
  },
  item8: {
    backgroundColor: Color.colorWhite,
  },
  dropdownList: {
    width: "51.03%",
    right: "43.33%",
    height: 331,
    alignItems: "center",
    justifyContent: "center",
    left: "5.64%",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    top: 398,
    backgroundColor: Color.colorWhite,
  },
  image16Icon: {
    top: 130,
    width: 29,
    height: 30,
    left: 22,
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Frame7;
