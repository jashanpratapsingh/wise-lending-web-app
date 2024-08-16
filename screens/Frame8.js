import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import HOMEROW1 from "../components/HOMEROW";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Frame81 = () => {
  return (
    <View style={styles.savingHub}>
      <View style={[styles.savingHubChild, styles.savingHubChildLayout]} />
      <View style={[styles.img4427Parent, styles.img4427Layout]}>
        <Image
          style={[styles.img4427Icon, styles.img4427IconLayout]}
          contentFit="cover"
          source={require("../assets/img-4427.png")}
        />
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
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
        style={styles.image17Icon}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
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
      </View>
      <HOMEROW1
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFillIconHomeFill={require("../assets/home-fill.png")}
        farms="Farms"
        refresh2IconRefresh2={require("../assets/refresh-21.png")}
        groupFillIconGroupFill={require("../assets/group-fill11.png")}
      />
      <View
        style={[styles.mainComponentLendingHubSav, styles.img4427IconLayout]}
      >
        <View style={[styles.img4427Group, styles.img4427Layout]}>
          <Image
            style={[styles.img4427Icon, styles.img4427IconLayout]}
            contentFit="cover"
            source={require("../assets/img-4427.png")}
          />
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
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
        <View style={[styles.eaInputBoxParent, styles.inputPosition]}>
          <View style={styles.eaInputBox} />
          <Text style={[styles.supply, styles.topUpTypo]}>Supply</Text>
          <Image
            style={[styles.downloadIcon, styles.downloadIconPosition]}
            contentFit="cover"
            source={require("../assets/download1.png")}
          />
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputPosition]}>
          <View style={styles.eaInputBox} />
          <Image
            style={[styles.downloadIcon1, styles.downloadIconPosition]}
            contentFit="cover"
            source={require("../assets/download2.png")}
          />
          <Text style={[styles.borrow, styles.borrowTypo]}>Borrow</Text>
        </View>
        <Text style={[styles.save, styles.wiseTypo]}>Save</Text>
        <View style={[styles.eaInputBoxContainer, styles.frameViewPosition]}>
          <View style={styles.eaInputBox} />
          <Text style={[styles.topUp, styles.topUpTypo]}>Top Up</Text>
          <Image
            style={[styles.downloadIcon2, styles.downloadIconPosition]}
            contentFit="cover"
            source={require("../assets/download2.png")}
          />
        </View>
        <View style={[styles.frameView, styles.frameViewPosition]}>
          <View style={styles.eaInputBox} />
          <Text style={[styles.borrow1, styles.borrowTypo]}>Borrow</Text>
          <Image
            style={styles.lightningRingLightIcon}
            contentFit="cover"
            source={require("../assets/lightning-ring-light.png")}
          />
        </View>
        <View style={[styles.frameParent, styles.parentLayout]}>
          <View style={[styles.listboxbgParent, styles.parentLayout]}>
            <View style={[styles.listboxbg, styles.listboxbgShadowBox]} />
            <View style={styles.placeholderText}>
              <Text style={[styles.selectAsset, styles.textTypo]}>
                Select Asset
              </Text>
            </View>
            <Image
              style={[styles.chevronIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/chevron11.png")}
            />
          </View>
          <View style={[styles.listboxMain, styles.listboxbg1Position]}>
            <View style={[styles.listboxbg1, styles.listboxbg1Position]} />
            <Text style={[styles.text, styles.textTypo]}>$ 0.00</Text>
          </View>
        </View>
        <View style={[styles.interestEarnedParent, styles.parentPosition]}>
          <Text style={[styles.interestEarned, styles.savingsHubTypo]}>
            Interest Earned
          </Text>
          <View style={[styles.eyeParent, styles.parentPosition]}>
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.text1, styles.wiseTypo]}>$11,524.06</Text>
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector-111.png")}
            />
            <Text style={[styles.savingsHub, styles.savingsHubTypo]}>
              Savings Hub
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  savingHubChildLayout: {
    width: 390,
    left: 0,
  },
  img4427Layout: {
    height: 270,
    width: 353,
    position: "absolute",
  },
  img4427IconLayout: {
    width: 353,
    position: "absolute",
  },
  groupChildLayout: {
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
  inputPosition: {
    top: 301,
    height: 58,
    position: "absolute",
  },
  topUpTypo: {
    height: 17,
    width: 53,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    top: 34,
    fontSize: FontSize.size_xs,
    left: "50%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  downloadIconPosition: {
    height: 22,
    width: 25,
    top: 7,
    left: "50%",
    position: "absolute",
  },
  borrowTypo: {
    top: 35,
    height: 17,
    width: 53,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    fontSize: FontSize.size_xs,
    left: "50%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frameViewPosition: {
    top: 103,
    height: 58,
    position: "absolute",
  },
  parentLayout: {
    height: 60,
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
    backgroundColor: Color.colorGhostwhite,
    left: "0%",
    width: "100%",
  },
  textTypo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  listboxbg1Position: {
    bottom: 0,
    right: "0%",
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    width: 201,
    top: 0,
    position: "absolute",
  },
  savingsHubTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  savingHubChild: {
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
    position: "absolute",
  },
  rectangleParent: {
    top: 162,
    left: 27,
    width: 170,
  },
  img4427Parent: {
    top: 506,
    left: 19,
  },
  image17Icon: {
    top: 131,
    left: 24,
    width: 29,
    height: 30,
    position: "absolute",
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
  img4427Group: {
    top: 401,
    left: 0,
  },
  eaInputBox: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite,
    left: "0%",
    right: "0%",
    height: 58,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  supply: {
    marginLeft: -28.5,
  },
  downloadIcon: {
    marginLeft: -14.5,
  },
  eaInputBoxParent: {
    width: "56.94%",
    right: "42.21%",
    height: 58,
    left: "0.85%",
  },
  downloadIcon1: {
    marginLeft: -13,
  },
  borrow: {
    marginLeft: -26,
  },
  eaInputBoxGroup: {
    width: "38.53%",
    left: "59.77%",
    right: "1.7%",
    height: 58,
  },
  save: {
    top: 186,
    left: 5,
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_500,
    textAlign: "left",
    position: "absolute",
  },
  topUp: {
    marginLeft: -26,
  },
  downloadIcon2: {
    marginLeft: -12,
  },
  eaInputBoxContainer: {
    width: "46.46%",
    right: "51.84%",
    left: "1.7%",
  },
  borrow1: {
    marginLeft: -26.5,
  },
  lightningRingLightIcon: {
    marginLeft: -15.5,
    width: 30,
    left: "50%",
    height: 30,
    top: 5,
    position: "absolute",
  },
  frameView: {
    width: "47.31%",
    left: "50.99%",
    right: "1.7%",
  },
  listboxbg: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  selectAsset: {
    top: "0%",
    left: "0%",
    textAlign: "left",
  },
  placeholderText: {
    height: "33.33%",
    width: "65.72%",
    top: "33.33%",
    right: "28.56%",
    bottom: "33.33%",
    left: "5.72%",
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
  listboxbg1: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorGhostwhite,
    left: "0%",
    width: "100%",
  },
  text: {
    width: "83.82%",
    top: 20,
    left: "11.03%",
    textAlign: "right",
  },
  listboxMain: {
    width: "39.53%",
    left: "60.47%",
  },
  frameParent: {
    width: "97.45%",
    top: 225,
    right: "1.7%",
    left: "0.85%",
  },
  interestEarned: {
    top: 61,
    color: Color.colorDimgray_400,
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
  text1: {
    top: 24,
    left: 29,
    fontSize: FontSize.size_9xl,
    color: Color.colorSeagreen,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    height: "27.59%",
    width: "2.99%",
    top: "56.9%",
    bottom: "15.52%",
    left: "97.01%",
    right: "0%",
  },
  savingsHub: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDimgray_300,
    top: 0,
  },
  eyeParent: {
    height: 58,
    left: 0,
  },
  interestEarnedParent: {
    left: 7,
    height: 76,
  },
  mainComponentLendingHubSav: {
    top: 105,
    height: 671,
    left: 19,
  },
  savingHub: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Frame81;
