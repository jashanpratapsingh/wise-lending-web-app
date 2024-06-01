import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame2 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameChildLayout1]} />
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
      <View style={[styles.eaInputBox, styles.inputLayout]} />
      <View style={styles.upToPaParent}>
        <Text style={styles.upToPa}>Up to p.a</Text>
        <Text style={[styles.text, styles.textTypo]}>5.52%</Text>
      </View>
      <Image
        style={[styles.b51a10F900448eB983702a2bdaIcon, styles.b51a10IconLayout]}
        contentFit="cover"
        source={require("../assets/00b51a10f900448eb983702a2bda10d6-12.png")}
      />
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/vector-10.png")}
      />
      <View style={[styles.oethParent, styles.oethGroupLayout]}>
        <Text style={[styles.oeth, styles.oethTypo]}>OETH</Text>
        <Text style={styles.origin}>origin</Text>
      </View>
      <View style={[styles.eaInputBox1, styles.inputLayout]} />
      <View style={[styles.upToPaGroup, styles.groupParentLayout]}>
        <Text style={styles.upToPa}>Up to p.a</Text>
        <Text style={[styles.text1, styles.textTypo]}>25.52%</Text>
      </View>
      <Image
        style={[styles.frameInner, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/vector-10.png")}
      />
      <View style={[styles.rsethParent, styles.oethGroupLayout]}>
        <Text style={[styles.oeth, styles.oethTypo]}>rsETH</Text>
        <Text style={[styles.kelp, styles.kelpTypo]}>Kelp</Text>
      </View>
      <Image
        style={[styles.ab328b09F46a47a8Aa6f086e75Icon, styles.b51a10IconLayout]}
        contentFit="cover"
        source={require("../assets/ab328b09f46a47a8aa6f086e75161418-11.png")}
      />
      <View style={[styles.eaInputBox2, styles.inputLayout]} />
      <View style={[styles.upToPaContainer, styles.groupParentLayout]}>
        <Text style={styles.upToPa}>Up to p.a</Text>
        <Text style={[styles.text1, styles.textTypo]}>5.74%</Text>
      </View>
      <Image
        style={[styles.b0e32688be40bcA04dF754fd0cIcon, styles.b51a10IconLayout]}
        contentFit="cover"
        source={require("../assets/62b0e32688be40bca04df754fd0c3bb2-11.png")}
      />
      <View style={[styles.sfrxethParent, styles.sfrxethPosition]}>
        <Text style={[styles.sfrxeth, styles.oethTypo]}>sfrxETH</Text>
        <Text style={[styles.frax, styles.kelpTypo]}>Frax</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-10.png")}
      />
      <View style={[styles.eaInputBox3, styles.inputLayout]} />
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <Text style={styles.upToPa}>Up to p.a</Text>
        <Text style={[styles.text1, styles.textTypo]}>5.52%</Text>
      </View>
      <Image
        style={[
          styles.b51a10F900448eB983702a2bdaIcon1,
          styles.oethGroupPosition,
        ]}
        contentFit="cover"
        source={require("../assets/00b51a10f900448eb983702a2bda10d6-13.png")}
      />
      <Image
        style={[styles.frameChild1, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-10.png")}
      />
      <View style={[styles.oethGroup, styles.oethGroupPosition]}>
        <Text style={[styles.oeth, styles.oethTypo]}>OETH</Text>
        <Text style={[styles.origin1, styles.kelpTypo]}>origin</Text>
      </View>
      <View style={[styles.eaInputBox4, styles.inputLayout]} />
      <View style={[styles.upToPaParent1, styles.groupParentLayout]}>
        <Text style={styles.upToPa}>Up to p.a</Text>
        <Text style={[styles.text1, styles.textTypo]}>25.52%</Text>
      </View>
      <Image
        style={[styles.frameChild2, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-10.png")}
      />
      <View style={[styles.rsethGroup, styles.rsethGroupPosition]}>
        <Text style={[styles.oeth, styles.oethTypo]}>rsETH</Text>
        <Text style={[styles.kelp1, styles.kelpTypo]}>Kelp</Text>
      </View>
      <Image
        style={[
          styles.ab328b09F46a47a8Aa6f086e75Icon1,
          styles.rsethGroupPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ab328b09f46a47a8aa6f086e75161418-11.png")}
      />
      <View style={[styles.eaInputBox5, styles.inputLayout]} />
      <View style={[styles.upToPaParent2, styles.groupParentLayout]}>
        <Text style={styles.upToPa}>Up to p.a</Text>
        <Text style={[styles.text1, styles.textTypo]}>5.74%</Text>
      </View>
      <Image
        style={[
          styles.b0e32688be40bcA04dF754fd0cIcon1,
          styles.b51a10IconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/62b0e32688be40bca04df754fd0c3bb2-11.png")}
      />
      <View style={[styles.sfrxethGroup, styles.sfrxethPosition]}>
        <Text style={[styles.sfrxeth, styles.oethTypo]}>sfrxETH</Text>
        <Text style={[styles.frax, styles.kelpTypo]}>Frax</Text>
      </View>
      <Image
        style={[styles.frameChild3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-10.png")}
      />
      <View style={styles.rectangleGroup}>
        <View style={styles.frameChild4} />
        <Text style={styles.searchYourPools}>Search your Pools</Text>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout1: {
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
  inputLayout: {
    height: 72,
    width: 341,
    borderColor: Color.colorDarkgray_600,
    borderRadius: Border.br_3xs,
    marginLeft: -170,
    borderWidth: 1,
    left: "50%",
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDodgerblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    width: 141,
    left: "50%",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  b51a10IconLayout: {
    overflow: "hidden",
    height: 45,
    width: 45,
    left: 35,
  },
  frameLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "88.21%",
    right: "10.77%",
    width: "1.03%",
    height: "1.18%",
    overflow: "hidden",
    position: "absolute",
  },
  oethGroupLayout: {
    height: 17,
    width: 75,
  },
  oethTypo: {
    color: Color.colorDimgray_500,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  groupParentLayout: {
    width: 149,
    left: 92,
    height: 19,
    position: "absolute",
  },
  kelpTypo: {
    textAlign: "left",
    color: Color.colorDimgray_400,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  sfrxethPosition: {
    flexDirection: "row",
    left: 100,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 10,
    width: 4,
    left: 344,
    position: "absolute",
  },
  oethGroupPosition: {
    top: 485,
    position: "absolute",
  },
  frameChildLayout: {
    left: "87.44%",
    right: "11.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "1.03%",
    height: "1.18%",
    overflow: "hidden",
    position: "absolute",
  },
  rsethGroupPosition: {
    top: 575,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorWhite,
    width: 390,
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
    bottom: 569,
  },
  upToPa: {
    top: 1,
    width: 141,
    color: Color.colorDimgray_400,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
    position: "absolute",
  },
  text: {
    marginLeft: -66,
  },
  upToPaParent: {
    top: 242,
    left: 87,
    width: 150,
    height: 19,
    position: "absolute",
  },
  b51a10F900448eB983702a2bdaIcon: {
    top: 215,
    position: "absolute",
  },
  frameItem: {
    top: "27.73%",
    bottom: "71.09%",
  },
  oeth: {
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  origin: {
    marginLeft: 9.5,
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.colorDimgray_400,
    left: "50%",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 0,
    position: "absolute",
  },
  oethParent: {
    top: 216,
    left: 97,
    width: 75,
    position: "absolute",
  },
  eaInputBox1: {
    bottom: 479,
  },
  text1: {
    marginLeft: -66.5,
  },
  upToPaGroup: {
    top: 336,
  },
  frameInner: {
    top: "38.39%",
    bottom: "60.43%",
  },
  kelp: {
    marginLeft: 13.5,
    textAlign: "left",
    left: "50%",
    color: Color.colorDimgray_400,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  rsethParent: {
    top: 306,
    left: 99,
    position: "absolute",
  },
  ab328b09F46a47a8Aa6f086e75Icon: {
    top: 305,
    position: "absolute",
  },
  eaInputBox2: {
    bottom: 389,
  },
  upToPaContainer: {
    top: 425,
  },
  b0e32688be40bcA04dF754fd0cIcon: {
    top: 395,
    position: "absolute",
  },
  sfrxeth: {
    textAlign: "left",
  },
  frax: {
    marginLeft: 2,
    textAlign: "left",
  },
  sfrxethParent: {
    top: 398,
  },
  vectorIcon: {
    top: 414,
  },
  eaInputBox3: {
    bottom: 299,
  },
  groupView: {
    top: 515,
  },
  b51a10F900448eB983702a2bdaIcon1: {
    overflow: "hidden",
    height: 45,
    width: 45,
    left: 35,
  },
  frameChild1: {
    top: "59.48%",
    bottom: "39.34%",
  },
  origin1: {
    marginLeft: 11.5,
    textAlign: "left",
    left: "50%",
    color: Color.colorDimgray_400,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  oethGroup: {
    height: 17,
    width: 75,
    left: 97,
  },
  eaInputBox4: {
    bottom: 209,
  },
  upToPaParent1: {
    top: 605,
  },
  frameChild2: {
    top: "70.14%",
    bottom: "28.67%",
  },
  kelp1: {
    marginLeft: 12.5,
    textAlign: "left",
    left: "50%",
    color: Color.colorDimgray_400,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  rsethGroup: {
    height: 17,
    width: 75,
    left: 97,
  },
  ab328b09F46a47a8Aa6f086e75Icon1: {
    overflow: "hidden",
    height: 45,
    width: 45,
    left: 35,
  },
  eaInputBox5: {
    bottom: 119,
  },
  upToPaParent2: {
    top: 695,
  },
  b0e32688be40bcA04dF754fd0cIcon1: {
    top: 665,
    position: "absolute",
  },
  sfrxethGroup: {
    top: 668,
  },
  frameChild3: {
    top: 684,
  },
  frameChild4: {
    top: -1,
    left: -1,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorDarkgray_500,
    width: 302,
    borderWidth: 1,
    height: 33,
    borderStyle: "solid",
    position: "absolute",
  },
  searchYourPools: {
    top: 7,
    left: 90,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  searchIcon: {
    top: 4,
    left: 267,
    width: 24,
    height: 24,
    position: "absolute",
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

export default Frame2;
