import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
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
          style={[styles.image1Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.image2Icon, styles.iconPosition1]}
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
            style={styles.userFillIcon}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.inputLayout}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>5.52%</Text>
          </View>
          <View
            style={[
              styles.b51a10F900448eB983702a2bdaParent,
              styles.searchPoolsPosition,
            ]}
          >
            <Image
              style={[
                styles.b51a10F900448eB983702a2bdaIcon,
                styles.iconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/00b51a10f900448eb983702a2bda10d6-1.png")}
            />
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
            <View style={[styles.oethParent, styles.iconPosition]}>
              <Text style={[styles.oeth, styles.oethTypo]}>OETH</Text>
              <Text style={[styles.origin, styles.oethTypo]}>origin</Text>
            </View>
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>5.061%</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={styles.d0d18650Aaaa4deb80e5B0ba70Icon}
                contentFit="cover"
                source={require("../assets/d0d18650aaaa4deb80e5b0ba705cd93a-1.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>sFRAX</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Frax</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>25.52%</Text>
          </View>
          <View
            style={[
              styles.b51a10F900448eB983702a2bdaParent,
              styles.searchPoolsPosition,
            ]}
          >
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
            <View style={[styles.oethParent, styles.iconPosition]}>
              <Text style={[styles.oeth, styles.oethTypo]}>rsETH</Text>
              <Text style={[styles.origin, styles.oethTypo]}>Kelp</Text>
            </View>
            <Image
              style={[
                styles.b51a10F900448eB983702a2bdaIcon,
                styles.iconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/ab328b09f46a47a8aa6f086e75161418-1.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={styles.textPosition}>
              <Text style={styles.textTypo}>5.</Text>
              <Text style={styles.text5}>027</Text>
              <Text style={styles.textTypo}>%</Text>
            </Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>stETH</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Lido</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-101.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>5.74%</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={styles.d0d18650Aaaa4deb80e5B0ba70Icon}
                contentFit="cover"
                source={require("../assets/62b0e32688be40bca04df754fd0c3bb2-1.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>sfrxETH</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Frax</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>25.12%</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={[
                  styles.f3f0949196af43579dda99cbc6Icon,
                  styles.iconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/f3f0949196af43579dda99cbc6024bc9-1.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>ETHx</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Stader</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-102.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>5.52%</Text>
          </View>
          <View
            style={[
              styles.b51a10F900448eB983702a2bdaParent,
              styles.searchPoolsPosition,
            ]}
          >
            <Image
              style={[
                styles.b51a10F900448eB983702a2bdaIcon,
                styles.iconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/00b51a10f900448eb983702a2bda10d6-11.png")}
            />
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
            <View style={[styles.oethParent, styles.iconPosition]}>
              <Text style={[styles.oeth, styles.oethTypo]}>OETH</Text>
              <Text style={[styles.origin, styles.oethTypo]}>origin</Text>
            </View>
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>5.061%</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={styles.d0d18650Aaaa4deb80e5B0ba70Icon}
                contentFit="cover"
                source={require("../assets/d0d18650aaaa4deb80e5b0ba705cd93a-1.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>sFRAX</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Frax</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>25.52%</Text>
          </View>
          <View
            style={[
              styles.b51a10F900448eB983702a2bdaParent,
              styles.searchPoolsPosition,
            ]}
          >
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
            <View style={[styles.oethParent, styles.iconPosition]}>
              <Text style={[styles.oeth, styles.oethTypo]}>rsETH</Text>
              <Text style={[styles.origin, styles.oethTypo]}>Kelp</Text>
            </View>
            <Image
              style={[
                styles.b51a10F900448eB983702a2bdaIcon,
                styles.iconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/ab328b09f46a47a8aa6f086e75161418-1.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={styles.textPosition}>
              <Text style={styles.textTypo}>5.</Text>
              <Text style={styles.text5}>027</Text>
              <Text style={styles.textTypo}>%</Text>
            </Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>stETH</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Lido</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-101.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>5.74%</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={styles.d0d18650Aaaa4deb80e5B0ba70Icon}
                contentFit="cover"
                source={require("../assets/62b0e32688be40bca04df754fd0c3bb2-1.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>sfrxETH</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Frax</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>25.12%</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={[
                  styles.f3f0949196af43579dda99cbc6Icon,
                  styles.iconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/f3f0949196af43579dda99cbc6024bc9-1.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>ETHx</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Stader</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-102.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.frameChild10, styles.eaInputBoxBorder]} />
        <Text style={[styles.searchPools, styles.searchPoolsPosition]}>
          Search Pools
        </Text>
        <Image
          style={[styles.searchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    width: 390,
    left: 0,
  },
  yxldhnzg400x400Layout: {
    height: 62,
    position: "absolute",
  },
  iconPosition1: {
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
    textAlign: "center",
    color: Color.colorDimgray_600,
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
  eaInputBoxBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  textPosition: {
    color: Color.colorDodgerblue_100,
    fontSize: FontSize.size_lg,
    marginLeft: -66.5,
    width: 141,
    left: "50%",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  searchPoolsPosition: {
    top: 7,
    position: "absolute",
  },
  iconPosition: {
    top: 4,
    position: "absolute",
  },
  oethTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  inputLayout: {
    height: 70,
    width: 159,
  },
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 23,
    width: 23,
  },
  frameChild: {
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
    top: 33,
    width: 390,
    left: 0,
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
  eaInputBox: {
    marginLeft: -80.5,
    bottom: -1,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorDarkgray_600,
    width: 161,
    height: 72,
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  upToPa: {
    width: 141,
    color: Color.colorDimgray_400,
    fontSize: FontSize.size_sm,
    top: 4,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  upToPaParent: {
    top: 38,
    left: 4,
    width: 149,
    height: 22,
    position: "absolute",
  },
  b51a10F900448eB983702a2bdaIcon: {
    left: 2,
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  frameItem: {
    height: "38.46%",
    width: "2.96%",
    top: "30.77%",
    right: "0%",
    bottom: "30.77%",
    left: "97.04%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  oeth: {
    color: Color.colorDimgray_500,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  origin: {
    marginLeft: 5.5,
    color: Color.colorDimgray_400,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  oethParent: {
    left: 25,
    width: 75,
    height: 17,
  },
  b51a10F900448eB983702a2bdaParent: {
    left: 7,
    width: 135,
    height: 26,
  },
  d0d18650Aaaa4deb80e5B0ba70Icon: {
    width: 22,
    overflow: "hidden",
    height: 22,
  },
  sfrax: {
    color: Color.colorDimgray_500,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frax: {
    marginLeft: 2,
    color: Color.colorDimgray_400,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  sfraxParent: {
    marginLeft: 4,
    flexDirection: "row",
  },
  frameInner: {
    width: 4,
    height: 10,
    marginLeft: 21,
  },
  frameGroup: {
    top: 11,
    left: 9,
    position: "absolute",
  },
  eaInputBoxGroup: {
    marginLeft: 18,
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  text5: {
    fontFamily: FontFamily.interRegular,
  },
  f3f0949196af43579dda99cbc6Icon: {
    overflow: "hidden",
  },
  frameParent: {
    top: 204,
    left: 26,
    width: 336,
    height: 510,
    flexWrap: "wrap",
    flexDirection: "row",
    position: "absolute",
  },
  frameChild10: {
    top: -1,
    left: -1,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorDarkgray_500,
    width: 302,
    height: 33,
  },
  searchPools: {
    left: 106,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 7,
    textAlign: "center",
  },
  searchIcon: {
    left: 267,
    width: 24,
    height: 24,
  },
  rectangleGroup: {
    top: 129,
    left: 45,
    width: 300,
    height: 31,
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Frame1;
