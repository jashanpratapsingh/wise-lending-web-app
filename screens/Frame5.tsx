import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame5 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.eaInputBoxParent, styles.parentLayout]}>
        <View style={[styles.eaInputBox, styles.inputPosition]} />
        <Text style={[styles.supply, styles.borrowTypo]}>Supply</Text>
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
        <Text style={[styles.borrow, styles.borrowTypo]}>Borrow</Text>
      </View>
      <Text style={[styles.availableToLend, styles.textFlexBox]}>
        Available to lend
      </Text>
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
          style={[styles.lightningRingLightIcon, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/lightning-ring-light.png")}
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
      <Text style={styles.lend}>Lend</Text>
      <Image
        style={[styles.image4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-31.png")}
      />
      <View style={[styles.eaInputBoxParent1, styles.parentPosition1]}>
        <View style={styles.eaInputBox4} />
        <Text style={[styles.interestEarned, styles.textFlexBox]}>
          Interest Earned
        </Text>
        <Text style={styles.savingsHub}>Savings Hub</Text>
        <Text style={[styles.text, styles.textFlexBox]}>$11,524.06</Text>
        <Image
          style={styles.image3Icon}
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
        <View style={[styles.homeParent, styles.parentPosition1]}>
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
      <View style={[styles.img4427Parent, styles.img4427Layout]}>
        <Image
          style={[styles.img4427Icon, styles.img4427Layout]}
          contentFit="cover"
          source={require("../assets/img-4427.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.wiseToken, styles.wiseTokenClr]}>
            WISE Token
          </Text>
          <Image
            style={[styles.groupItem, styles.groupItemPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.yxldhnzg400x400RemovebgPrevIcon1}
            contentFit="cover"
            source={require("../assets/yxldhnzg-400x400removebgpreview-7.png")}
          />
          <Text style={[styles.wise, styles.wisePosition]}>WISE</Text>
        </View>
      </View>
      <View style={[styles.eyeParent, styles.parentLayout]}>
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>$23,000.06</Text>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/vector-111.png")}
        />
        <Text style={[styles.lendingHub, styles.wiseTokenClr]}>
          Lending Hub
        </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    width: 390,
    left: 0,
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
  borrowTypo: {
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
    width: 25,
    top: 7,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
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
  groupItemPosition: {
    top: 5,
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
  iconLayout: {
    height: 33,
    position: "absolute",
  },
  parentPosition1: {
    left: 24,
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
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
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
  img4427Layout: {
    width: 353,
    position: "absolute",
  },
  groupLayout: {
    height: 39,
    position: "absolute",
  },
  wiseTokenClr: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    position: "absolute",
  },
  wisePosition: {
    left: 40,
    fontSize: FontSize.size_sm,
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
  eaInputBox: {
    backgroundColor: Color.colorGhostwhite,
    height: 58,
    position: "absolute",
    width: 199,
  },
  supply: {
    left: 72,
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
  },
  eaInputBoxGroup: {
    left: 230,
    width: 134,
    top: 398,
    height: 58,
    position: "absolute",
  },
  availableToLend: {
    top: 167,
    color: Color.colorDimgray_400,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
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
  borrow1: {
    left: 57,
    top: 35,
  },
  lightningRingLightIcon: {
    left: 68,
    width: 30,
    height: 30,
  },
  frameView: {
    left: 199,
    top: 208,
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
  lend: {
    top: 291,
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_500,
    left: 24,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  image4Icon: {
    top: 130,
    width: 32,
    left: 22,
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
  interestEarned: {
    top: 66,
    left: 8,
    color: Color.colorDimgray_400,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  savingsHub: {
    top: 11,
    left: 32,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_500,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text: {
    top: 36,
    fontSize: FontSize.size_lg,
    color: Color.colorSeagreen,
    left: 8,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  image3Icon: {
    left: 7,
    height: 26,
    width: 25,
    top: 7,
    position: "absolute",
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
    left: 40,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDimgray_300,
  },
  groupItem: {
    height: 32,
    width: 32,
    left: 0,
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
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
    color: Color.colorDodgerblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
  lendingHub: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
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
  rectangleParent: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Frame5;
