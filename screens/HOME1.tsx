import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HOME1 = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homeChildLayout]} />
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
      <View
        style={[styles.lendingUtliizationParent, styles.refresh2IconPosition]}
      >
        <View style={[styles.lendingUtliization, styles.lendingLayout]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <View style={[styles.groupItem, styles.groupChildPosition]} />
          </View>
          <View
            style={[
              styles.savingsCapitalizationParent,
              styles.portfolioParentPosition,
            ]}
          >
            <Text
              style={[styles.savingsCapitalization, styles.lendingHubTypo]}
            >{`Savings Capitalization `}</Text>
            <Text style={[styles.text, styles.textTypo2]}>25%</Text>
          </View>
        </View>
        <View style={[styles.lendingUtliization1, styles.lendingLayout]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <View style={[styles.rectangleView, styles.groupChildPosition]} />
          </View>
          <View
            style={[
              styles.lendingUtilizationParent,
              styles.portfolioParentPosition,
            ]}
          >
            <Text style={[styles.savingsCapitalization, styles.lendingHubTypo]}>
              Lending Utilization
            </Text>
            <Text style={[styles.text1, styles.textTypo2]}>75%</Text>
          </View>
        </View>
        <View style={styles.farmingPortfolio}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild1, styles.groupChild1Border]} />
            <View style={[styles.groupChild2, styles.groupChildPosition]} />
          </View>
          <View
            style={[
              styles.farmingPortfolioInner,
              styles.portfolioParentPosition,
            ]}
          >
            <View
              style={[
                styles.farmingPortfolioParent,
                styles.portfolioParentPosition,
              ]}
            >
              <Text
                style={[styles.savingsCapitalization, styles.lendingHubTypo]}
              >
                Farming Portfolio
              </Text>
              <Text style={[styles.text2, styles.textTypo2]}>$42.56</Text>
            </View>
          </View>
          <Text style={[styles.text3, styles.textTypo1]}>4.11%</Text>
          <Text style={[styles.h, styles.textTypo1]}>24H</Text>
          <Image
            style={styles.arrowDropUpIcon}
            contentFit="cover"
            source={require("../assets/arrow-drop-up.png")}
          />
        </View>
        <View style={styles.portfolioGains}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <View style={[styles.groupChild4, styles.groupChildPosition]} />
          </View>
          <View
            style={[styles.portfolioParent, styles.portfolioParentPosition]}
          >
            <Text style={[styles.savingsCapitalization, styles.lendingHubTypo]}>
              Portfolio
            </Text>
            <Text style={[styles.text4, styles.textTypo2]}>$24.56</Text>
          </View>
          <Text style={[styles.net5Apy, styles.textTypo1]}>Net 5% APY</Text>
        </View>
      </View>
      <View style={[styles.homeItem, styles.groupChildLayout]} />
      <View style={[styles.buttonBar, styles.buttonBarPosition]}>
        <View style={styles.inputLayout1}>
          <View style={[styles.eaInputBox, styles.inputLayout]} />
          <Image
            style={[styles.addRoundDuotoneLineIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/add-round-duotone-line1.png")}
          />
          <Text style={[styles.buy, styles.buyTypo]}>Buy</Text>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout1]}>
          <View style={[styles.eaInputBox, styles.inputLayout]} />
          <Text style={[styles.buy, styles.buyTypo]}>Top Up</Text>
          <Image
            style={[styles.downloadIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/download2.png")}
          />
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout1]}>
          <View style={[styles.eaInputBox, styles.inputLayout]} />
          <Text style={[styles.buy, styles.buyTypo]}>Borrow</Text>
          <Image
            style={[styles.lightningRingLightIcon, styles.buttonBarPosition]}
            contentFit="cover"
            source={require("../assets/lightning-ring-light1.png")}
          />
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout1]}>
          <View style={[styles.eaInputBox, styles.inputLayout]} />
          <Image
            style={[styles.refresh2Icon, styles.refresh2IconPosition]}
            contentFit="cover"
            source={require("../assets/refresh-23.png")}
          />
          <Text style={[styles.exchange, styles.buyTypo]}>Exchange</Text>
        </View>
      </View>
      <View style={styles.hubs}>
        <View style={[styles.eaInputBoxParent1, styles.inputParentLayout]}>
          <View style={[styles.eaInputBox4, styles.inputLayout]} />
          <Text style={[styles.availableToLend, styles.home1Typo]}>
            Available to lend
          </Text>
          <Image
            style={[styles.image2Icon1, styles.parentLayout]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
          <Text style={[styles.lendingHub, styles.lendingHubTypo]}>
            Lending Hub
          </Text>
          <Text style={[styles.text5, styles.textTypo]}>$23,000.06</Text>
          <Image
            style={[styles.frameChild, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-10.png")}
          />
        </View>
        <View style={[styles.eaInputBoxParent2, styles.inputParentLayout]}>
          <View style={[styles.eaInputBox4, styles.inputLayout]} />
          <Text style={[styles.availableToLend, styles.home1Typo]}>
            Interest Earned
          </Text>
          <Text style={[styles.lendingHub, styles.lendingHubTypo]}>
            Savings Hub
          </Text>
          <Text style={[styles.text6, styles.textTypo]}>$11,524.06</Text>
          <Image
            style={[styles.image2Icon1, styles.parentLayout]}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
          <Image
            style={[styles.frameChild, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-10.png")}
          />
        </View>
      </View>
      <View style={[styles.homeRow, styles.homeLayout]}>
        <Image
          style={[styles.homeRowChild, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-390.png")}
        />
        <View style={[styles.homeParent, styles.buttonBarPosition]}>
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          <Image
            style={[styles.homeFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/home-fill1.png")}
          />
        </View>
        <View style={[styles.darhboardParent, styles.parentPosition]}>
          <View style={[styles.homeFillIcon, styles.fillIconLayout]}>
            <View style={[styles.darhboardChild, styles.darhboardLayout1]} />
            <View style={[styles.darhboardItem, styles.darhboardPosition]} />
            <View style={[styles.darhboardInner, styles.darhboardLayout]} />
            <View style={[styles.darhboardChild1, styles.darhboardLayout]} />
          </View>
          <Text style={[styles.farms, styles.home1Typo]}>Farms</Text>
        </View>
        <View style={[styles.exchangeParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.home1Typo]}>Exchange</Text>
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
            source={require("../assets/group-fill.png")}
          />
          <Text style={[styles.business, styles.home1Typo]}>Business</Text>
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.home1Typo]}>Account</Text>
          <Image
            style={[styles.userFillIcon, styles.text7Position]}
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
        <Text style={[styles.text7, styles.text7Position]}>$33,524.12</Text>
        <Image
          style={[styles.vectorIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Text style={[styles.walletBalance, styles.textTypo1]}>
          Wallet Balance
        </Text>
        <View style={[styles.parent, styles.parentLayout]}>
          <Text style={[styles.text8, styles.textTypo1]}>5.63%</Text>
          <Text style={[styles.h1, styles.textTypo1]}>24H</Text>
          <Image
            style={[styles.arrowDropUpIcon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/arrow-drop-up1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeChildLayout: {
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
  refresh2IconPosition: {
    left: 29,
    position: "absolute",
  },
  lendingLayout: {
    height: 43,
    width: 329,
    left: 2,
    position: "absolute",
  },
  groupChildLayout: {
    height: 15,
    position: "absolute",
  },
  groupChildPosition: {
    height: 11,
    backgroundColor: Color.colorDodgerblue_100,
    left: 1,
    top: 1,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  portfolioParentPosition: {
    height: 17,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lendingHubTypo: {
    color: Color.colorDimgray_500,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textTypo2: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  groupChild1Border: {
    borderColor: Color.colorDarkgray_600,
    borderWidth: 1,
    borderStyle: "solid",
    left: -1,
    top: -1,
  },
  textTypo1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  buttonBarPosition: {
    left: 24,
    position: "absolute",
  },
  inputLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  buyTypo: {
    color: Color.colorRoyalblue_100,
    textAlign: "center",
    top: 34,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    height: 17,
    position: "absolute",
  },
  inputLayout1: {
    height: 58,
    width: 78,
  },
  iconLayout: {
    width: 25,
    top: 7,
  },
  inputParentLayout: {
    width: 159,
    height: 91,
    top: 0,
    position: "absolute",
  },
  home1Typo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  parentLayout: {
    height: 26,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    top: 36,
    left: 8,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frameChildLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
  darhboardLayout1: {
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
  darhboardLayout: {
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
  text7Position: {
    left: 6,
    position: "absolute",
  },
  homeChild: {
    backgroundColor: Color.colorWhite,
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
    top: 23,
    width: 390,
    left: 0,
  },
  groupChild: {
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorDarkgray_500,
    width: 330,
    borderRadius: Border.br_81xl,
    height: 15,
    borderWidth: 1,
    borderStyle: "solid",
    top: -1,
    left: -1,
  },
  groupItem: {
    width: 105,
  },
  rectangleParent: {
    top: 25,
    width: 328,
    height: 13,
    left: 0,
    position: "absolute",
  },
  savingsCapitalization: {
    textAlign: "left",
    left: 0,
    top: 0,
  },
  text: {
    left: 163,
    color: Color.colorDodgerblue_100,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  savingsCapitalizationParent: {
    width: 192,
  },
  lendingUtliization: {
    top: 218,
  },
  rectangleView: {
    width: 255,
  },
  text1: {
    left: 140,
    color: Color.colorDodgerblue_100,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  lendingUtilizationParent: {
    width: 169,
  },
  lendingUtliization1: {
    top: 156,
  },
  groupChild1: {
    backgroundColor: Color.colorSteelblue,
    height: 15,
    position: "absolute",
    width: 330,
    borderRadius: Border.br_81xl,
    borderColor: Color.colorDarkgray_600,
  },
  groupChild2: {
    width: 249,
  },
  text2: {
    left: 124,
    color: Color.colorDodgerblue_100,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  farmingPortfolioParent: {
    width: 173,
  },
  farmingPortfolioInner: {
    width: 329,
  },
  text3: {
    textAlign: "right",
    color: Color.colorSeagreen,
    left: 17,
    top: 43,
    fontSize: FontSize.size_xs,
  },
  h: {
    left: 51,
    color: Color.colorDimgray_600,
    top: 43,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  arrowDropUpIcon: {
    top: 47,
    width: 18,
    height: 18,
    left: -1,
    position: "absolute",
  },
  farmingPortfolio: {
    top: 79,
    height: 65,
    width: 329,
    left: 2,
    position: "absolute",
  },
  groupChild4: {
    width: 119,
  },
  text4: {
    left: 65,
    color: Color.colorDodgerblue_100,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  portfolioParent: {
    width: 113,
  },
  net5Apy: {
    top: 42,
    color: Color.colorDimgray_600,
    textAlign: "left",
    left: 0,
  },
  portfolioGains: {
    height: 60,
    width: 329,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lendingUtliizationParent: {
    top: 450,
    width: 331,
    height: 139,
  },
  homeItem: {
    top: 153,
    left: 38,
    width: 60,
  },
  eaInputBox: {
    backgroundColor: Color.colorGhostwhite,
    height: 58,
    width: 78,
    left: 0,
    top: 0,
  },
  addRoundDuotoneLineIcon: {
    top: 6,
    left: 27,
  },
  buy: {
    left: 13,
    width: 53,
    textAlign: "center",
  },
  downloadIcon: {
    height: 22,
    left: 27,
    position: "absolute",
  },
  eaInputBoxGroup: {
    marginLeft: 10,
  },
  lightningRingLightIcon: {
    top: 4,
    width: 30,
    height: 30,
  },
  refresh2Icon: {
    top: 8,
    width: 21,
    height: 21,
  },
  exchange: {
    width: 63,
    left: 8,
    textAlign: "center",
  },
  buttonBar: {
    top: 224,
    flexDirection: "row",
  },
  eaInputBox4: {
    width: 161,
    height: 93,
    borderColor: Color.colorDarkgray_600,
    borderWidth: 1,
    borderStyle: "solid",
    left: -1,
    top: -1,
    backgroundColor: Color.colorWhite,
  },
  availableToLend: {
    top: 66,
    color: Color.colorDimgray_400,
    left: 8,
    textAlign: "left",
  },
  image2Icon1: {
    left: 7,
    width: 25,
    top: 7,
  },
  lendingHub: {
    top: 11,
    left: 32,
    textAlign: "left",
  },
  text5: {
    color: Color.colorDodgerblue_100,
  },
  frameChild: {
    height: "10.99%",
    width: "2.52%",
    top: "16.48%",
    right: "10.69%",
    bottom: "72.53%",
    left: "86.79%",
  },
  eaInputBoxParent1: {
    left: 0,
  },
  text6: {
    color: Color.colorSeagreen,
  },
  eaInputBoxParent2: {
    left: 183,
  },
  hubs: {
    top: 320,
    width: 342,
    height: 91,
    left: 24,
    position: "absolute",
  },
  homeRowChild: {
    top: 0,
  },
  home1: {
    top: 35,
    textAlign: "center",
    color: Color.colorDimgray_600,
    left: 0,
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
  darhboardChild1: {
    bottom: "55.43%",
    top: "13.71%",
  },
  farms: {
    top: 33,
    textAlign: "center",
    color: Color.colorDimgray_600,
    left: 0,
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
    textAlign: "center",
    top: 34,
    fontWeight: "300",
    color: Color.colorDimgray_600,
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
    height: 33,
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
    left: 100,
    width: 13,
    top: 1,
    height: 13,
    position: "absolute",
  },
  text7: {
    top: 24,
    fontSize: FontSize.size_9xl,
    color: Color.colorGray_400,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  vectorIcon: {
    height: "18.18%",
    width: "3.37%",
    top: "37.5%",
    right: "0%",
    bottom: "44.32%",
    left: "96.63%",
  },
  walletBalance: {
    color: Color.colorDimgray_300,
    left: 7,
    textAlign: "left",
    top: 0,
  },
  text8: {
    left: 21,
    color: Color.colorSeagreen,
    textAlign: "left",
    top: 0,
  },
  h1: {
    left: 57,
    color: Color.colorDimgray_600,
    textAlign: "left",
    top: 0,
  },
  arrowDropUpIcon1: {
    top: 2,
    left: 0,
  },
  parent: {
    top: 62,
    width: 81,
    left: 0,
  },
  eyeParent: {
    top: 118,
    width: 178,
    height: 88,
    left: 17,
    position: "absolute",
  },
  home: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default HOME1;
